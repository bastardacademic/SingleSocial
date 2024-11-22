import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeeds } from '../redux/feedsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { feeds, loading, error } = useSelector((state) => state.feeds);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  const filteredFeeds = filter === 'all' ? feeds : feeds.filter(feed => feed.platform === filter);

  return (
    <div className='dashboard'>
      <h1>Feeds Dashboard</h1>
      <div>
        <label>Filter by Platform: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value='all'>All</option>
          <option value='Facebook'>Facebook</option>
          <option value='Twitter'>Twitter</option>
          <option value='Instagram'>Instagram</option>
        </select>
      </div>
      {loading && <p>Loading feeds...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {filteredFeeds.map((feed, index) => (
          <li key={index}>
            <strong>{feed.platform}</strong>: {feed.content}
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
