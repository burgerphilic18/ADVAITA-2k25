import React from "react";
import "./statsstyles.css"; 
import SpecialElementR from "../assets/Special-element-right1.svg";
import SpecialElementL from "../assets/Special-element-left1.svg";
import StatisticBlock from '../components/StatisticBlock/StatisticBlock.jsx';
import Broom3 from '../assets/broom-3.svg';
import Broom1 from '../assets/broom-1.svg';
const StatsPage = ({ statistics = [] }) => {

  const defaultStats = [
    { value: "07+", label: "Fun Events", theme: "default" },
    { value: "07+", label: "Pro Shows", theme: "primary" },
    { value: "07+", label: "Technical Events", theme: "success" },
    { value: "07+", label: "Cultural Events", theme: "warning" },
    { value: "07+", label: "Total Footfall", theme: "danger" }
  ];

  const stats = statistics.length > 0 ? statistics : defaultStats;

    return (
      <div id="statspage" >
        
        
        <div className="stats-head">
            <img src={SpecialElementL} ></img>
            <h2>Our Stats</h2>
            <img src={SpecialElementR}></img>
        </div>
        <div className="statistics-grid">
      {stats.map((stat, index) => (
        <div key={index} className="grid-item">
          <StatisticBlock 
            value={stat.value} 
            label={stat.label} 
            theme={stat.theme} 
          />
        </div>
      ))}
      </div>
      <div className="Broom-right"><img src={Broom3} alt=''/></div>
      <div className="Broom-left"><img src={Broom1} alt=''/></div>
      </div>
    );
};
  
export default StatsPage;
