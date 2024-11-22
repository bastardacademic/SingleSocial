import React, { useState } from 'react';

const Planner = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSchedule = () => {
    if (editingIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editingIndex] = { content, date };
      setPosts(updatedPosts);
      setEditingIndex(null);
    } else {
      const newPost = { content, date };
      setPosts([...posts, newPost]);
    }
    setContent('');
    setDate('');
  };

  const handleEdit = (index) => {
    const post = posts[index];
    setContent(post.content);
    setDate(post.date);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
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
      <button onClick={handleSchedule}>{editingIndex !== null ? 'Update Post' : 'Schedule Post'}</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.content} - {post.date}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planner;
