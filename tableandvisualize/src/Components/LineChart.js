import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const LineChartComponent = () => {
  const data = [
    { name: 'Keyword 1', 'Max Count': 10 },
    { name: 'Keyword 2', 'Max Count': 20 },
    { name: 'Keyword 3', 'Max Count': 30 },
    { name: 'Keyword 4', 'Max Count': 40 },
    { name: 'Keyword 5', 'Max Count': 50 },
    { name: 'Keyword 6', 'Max Count': 60 },
    { name: 'Keyword 7', 'Max Count': 70 },
    { name: 'Keyword 8', 'Max Count': 80 },
    { name: 'Keyword 9', 'Max Count': 90 },
    { name: 'Keyword 10', 'Max Count': 100 },
    { name: 'Keyword 11', 'Max Count': 110 },
    { name: 'Keyword 12', 'Max Count': 120 },
    { name: 'Keyword 13', 'Max Count': 130 },
    { name: 'Keyword 14', 'Max Count': 140 },
    { name: 'Keyword 15', 'Max Count': 150 },
    { name: 'Keyword 16', 'Max Count': 160 },
    { name: 'Keyword 17', 'Max Count': 170 },
    { name: 'Keyword 18', 'Max Count': 180 },
    { name: 'Keyword 19', 'Max Count': 190 },
    { name: 'Keyword 20', 'Max Count': 200 },
  ];

  return (
    <div>
      <h2>Keyword Count Line Chart</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Max Count" stroke="rgb(75, 192, 192)" dot={false} />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
