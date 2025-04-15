import React, { useState } from "react";
import "./ExpandingCards.css";
const ExpandingCards = () => {
  const cards = [
    {
      image: "https://i.imgur.com/Uwnxs1W.jpg",
      title: "圖片 1",
    },
    {
      image: "https://i.imgur.com/88haUVt.jpg",
      title: "圖片 2",
    },
    {
      image: "https://i.imgur.com/OLeicMC.jpg",
      title: "圖片 3",
    },
    {
      image: "https://i.imgur.com/QN5SkRy.jpg",
      title: "圖片 4",
    },
    {
      image: "https://i.imgur.com/GXKp1HV.jpg",
      title: "圖片 5",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="container">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${activeIndex === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${card.image})` }}
          onClick={() => setActiveIndex(index)}
        >
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
