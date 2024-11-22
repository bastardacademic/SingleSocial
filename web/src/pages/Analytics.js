import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import axios from 'axios';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const response = await axios.get('/api/analytics');
      setData(response.data);
    };

    fetchAnalytics();
  }, []);

  return (
    <div>
      <h1>Analytics Overview</h1>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke='#f5f5f5' />
        <Line type='monotone' dataKey='engagement' stroke='#ff7300' />
      </LineChart>
    </div>
  );
};

export default Analytics;
