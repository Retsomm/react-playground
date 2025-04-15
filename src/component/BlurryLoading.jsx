import React, { useEffect, useState } from "react";
import "./BlurryLoading.css";
function BlurryLoading() {
  const [load, setLoad] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);
  const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };
  return (
    <div className="container">
      <div
        className="bg"
        style={{
          filter: `blur(${scale(load, 0, 100, 30, 0)}px)`,
        }}
      ></div>
      <div
        className="loading-text"
        style={{ opacity: scale(load, 0, 100, 1, 0) }}
      >
        {load}%
      </div>
    </div>
  );
}

export default BlurryLoading;
