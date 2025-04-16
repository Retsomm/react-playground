import React, { useState, useRef } from "react";
import "./DragNDrop.css";
const DragNDrop = () => {
  const [currentFill, setCurrentFill] = useState(null); // 目前正在拖曳的元素
  const fillRef = useRef(null);

  const handleDragStart = () => {
    console.log("drag start");
    if (fillRef.current) {
      fillRef.current.className = "fill hold";
      setTimeout(() => {
        if (fillRef.current) {
          fillRef.current.className = "invisible";
        }
      }, 0);
    }
    setCurrentFill(fillRef.current);
  };

  const handleDragEnd = () => {
    console.log("drag end");
    if (fillRef.current) {
      fillRef.current.className = "fill";
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("drag over");
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    console.log("drag enter");
    e.target.className += " hover";
  };

  const handleDragLeave = (e) => {
    console.log("drag leave");
    e.target.className = "square";
  };

  const handleDrop = (e) => {
    console.log("drag drop");
    e.target.className = "square";
    if (currentFill) {
      e.target.appendChild(currentFill);
    }
  };

  return (
    <div className="squares-container">
      {[0, 1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className="square"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {index === 0 && (
            <div
              className="fill"
              draggable="true"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              ref={fillRef}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DragNDrop;
