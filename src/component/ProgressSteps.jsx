import React, { useState } from "react";
import "./ProgressSteps.css";
const ProgressSteps = () => {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };
  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100 + "%";
  return (
    <div className="step-container">
      <div className="progress-container">
        <div className="progress" style={{ width: progressPercent }}></div>

        {[...Array(totalSteps)].map((_, index) => (
          <div
            className={`circle ${index < currentStep ? "active" : ""}`}
            key={index}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button
          className="btn"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          上一步
        </button>
        <button
          className="btn"
          onClick={handleNext}
          disabled={currentStep === totalSteps}
        >
          下一步
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
