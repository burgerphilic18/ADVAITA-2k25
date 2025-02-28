import React from 'react';
import './StatisticBlockStyle.css';

const StatisticBlock = ({ value, label, theme = "default" }) => {
  return (
    <div className={`statistic-block ${theme}`}>
      <h2 className="statistic-value">{value}</h2>
      <p className="statistic-label">{label}</p>
    </div>
  );
};

export default StatisticBlock;