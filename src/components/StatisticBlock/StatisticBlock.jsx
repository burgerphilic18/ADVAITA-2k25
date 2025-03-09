import React from 'react';
import './StatisticBlockStyle.css';

const StatisticBlock = ({ value, label, theme = "default" }) => {
  return (
    <div className={`statistic-block ${theme}`}>
      <h2 className="statistic-value harry-potter-f">{value}</h2>
      <p className="statistic-label pt-serif-regular">{label}</p>
    </div>
  );
};

export default StatisticBlock;