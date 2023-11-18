import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const AnimatedBarGraph = () => {
  const [animationData, setAnimationData] = useState([]);

  useEffect(() => {
    const EfficiencyData = [
      { algorithm: 'Algorithm 1', Efficiency: 90 },
      { algorithm: 'Algorithm 2', Efficiency: 85 },
      { algorithm: 'Algorithm 3', Efficiency: 70 },
      { algorithm: 'Algorithm 4', Efficiency: 95 },
      { algorithm: 'Algorithm 5', Efficiency: 80 },
    ];

    // Assign unique colors to each algorithm
    const algorithmColors = ['#8884d8', '#82ca9d', '#ffc658', '#8234d8', '#82ca9e'];

    const animationDuration = 8000; // Animation duration in milliseconds
    const animationSteps = 200; // Number of animation steps
    const stepSize = animationDuration / animationSteps;

    const animateData = () => {
      let currentStep = 0;
      const animationInterval = setInterval(() => {
        if (currentStep >= animationSteps) {
          clearInterval(animationInterval);
        } else {
          const newData = EfficiencyData.map((item, index) => ({
            algorithm: item.algorithm,
            Efficiency: (item.Efficiency / animationSteps) * (currentStep + 1),
            fill: algorithmColors[index],
          }));
          setAnimationData(newData);
          currentStep++;
        }
      }, stepSize);
    };

    animateData();
  }, []);

  return (
    <div>
      <h2>Algorithm Efficiency</h2>
      <BarChart width={600} height={300} data={animationData}>
        <XAxis dataKey="algorithm" type="category" />
        <YAxis dataKey="Efficiency" type="number" domain={[0, 'dataMax']} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Efficiency" fill="#8884d8">
          {animationData.map((entry, index) => (
            <Bar dataKey="Efficiency" fill={entry.fill} key={index} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default AnimatedBarGraph;
