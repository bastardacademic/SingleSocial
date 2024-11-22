import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeeds } from '../redux/feedsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { feeds, loading, error } = useSelector((state) => state.feeds);

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  return (
    <div className='dashboard'>
      <h1>Feeds Dashboard</h1>
      {loading && <p>Loading feeds...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {feeds.map((feed, index) => (
          <li key={index}>
            <strong>{feed.platform}</strong>: {feed.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
