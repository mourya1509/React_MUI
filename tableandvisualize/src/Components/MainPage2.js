import React from 'react';
import LineChartComponent from './LineChart';
import AnimatedBarGraph from './Chart';
import './MainPage2.css'; // Import a CSS file for styling

const MainPage2 = () => {
    return (
        <div className="main-page-container">
            <div className="chart-container">
                <h2>Bar Graph</h2>
                <AnimatedBarGraph />
            </div>
            <div className="chart-container">
                <h2>Line Chart</h2>
                <LineChartComponent />
            </div>
        </div>
    );
};

export default MainPage2;
