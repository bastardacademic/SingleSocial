import React, { useState } from 'react';

const Planner = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSchedule = () => {
    const newPost = { content, date };
    setPosts([...posts, newPost]);
    setContent('');
    setDate('');
  };

  return (
    <div className='planner'>
      <h1>Content Planner</h1>
      <input
        type='text'
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSchedule}>Schedule Post</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.content} - {post.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planner;
