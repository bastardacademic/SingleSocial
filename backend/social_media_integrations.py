from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Helper function to handle OAuth token retrieval
def get_oauth_token(platform, code):
    platforms = {
        'linkedin': {
            'url': 'https://www.linkedin.com/oauth/v2/accessToken',
            'client_id': 'YOUR_LINKEDIN_CLIENT_ID',
            'client_secret': 'YOUR_LINKEDIN_CLIENT_SECRET',
            'redirect_uri': 'YOUR_APP_REDIRECT_URL',
        },
        'youtube': {
            'url': 'https://oauth2.googleapis.com/token',
            'client_id': 'YOUR_YOUTUBE_CLIENT_ID',
            'client_secret': 'YOUR_YOUTUBE_CLIENT_SECRET',
            'redirect_uri': 'YOUR_APP_REDIRECT_URL',
        },
        'pinterest': {
            'url': 'https://api.pinterest.com/v5/oauth/token',
            'client_id': 'YOUR_PINTEREST_CLIENT_ID',
            'client_secret': 'YOUR_PINTEREST_CLIENT_SECRET',
            'redirect_uri': 'YOUR_APP_REDIRECT_URL',
        },
        'tiktok': {
            'url': 'https://open-api.tiktok.com/oauth/access_token',
            'client_id': 'YOUR_TIKTOK_CLIENT_ID',
            'client_secret': 'YOUR_TIKTOK_CLIENT_SECRET',
            'redirect_uri': 'YOUR_APP_REDIRECT_URL',
        }
    }

    platform_config = platforms.get(platform)
    if not platform_config:
        return None

    try:
        response = requests.post(platform_config['url'], data={
            'code': code,
            'client_id': platform_config['client_id'],
            'client_secret': platform_config['client_secret'],
            'redirect_uri': platform_config['redirect_uri'],
            'grant_type': 'authorization_code'
        })
        return response.json()
    except Exception as e:
        print(f"Error retrieving token for {platform}: {str(e)}")
        return None

# Routes for OAuth-based platforms
@app.route('/api/<platform>/oauth/token', methods=['POST'])
def oauth_token(platform):
    code = request.json.get('code')
    token_response = get_oauth_token(platform, code)
    if token_response:
        return jsonify(token_response)
    return jsonify({'error': 'Failed to retrieve token'}), 500

# Routes for Posting to Mastodon
@app.route('/api/mastodon/posts', methods=['POST'])
def mastodon_post():
    token = request.json.get('token')
    content = request.json.get('content')
    try:
        response = requests.post(
            'https://mastodon.social/api/v1/statuses',
            headers={'Authorization': f'Bearer {token}'},
            data={'status': content}
        )
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Additional routes for other platforms can follow the same structure
if __name__ == '__main__':
    app.run(debug=True)
