const redis = require('redis');
const client = redis.createClient();
client.on('error', (err) => console.error('Redis error:', err));

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl || req.url;
    client.get(key, (err, data) => {
        if (err) {
            console.error('Cache error:', err);
            return next();
        }
        if (data) {
            res.json(JSON.parse(data));
        } else {
            next();
        }
    });
};
module.exports = cacheMiddleware;
