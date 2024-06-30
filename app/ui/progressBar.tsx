import React from 'react';
import './progressBar.css'; // You can create a CSS file for styling

const ProgressBar = ({ actualValue, targetValue, actualColor, targetColor }:any) => {
  // Calculate percentage widths for actual and target values
  const actualPercentage = (actualValue / 100) * 100;
  const targetPercentage = (targetValue / 100) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar__target" style={{ width: `${targetPercentage}%`, backgroundColor: targetColor }}>
        <span className="progress-bar__target-text">{targetValue}%</span>
      </div>
      <div className="progress-bar__actual" style={{ width: `${actualPercentage}%`, backgroundColor: actualColor }}>
        <span className="progress-bar__actual-text">{actualValue}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;