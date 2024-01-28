import React from "react";

const BottomWave = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "rotate(0deg)",
        transition: ".3s",
      }}
      viewBox="0 0 1440 250"
    >
      <defs>
        <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
          <stop offset="0%" stopColor="rgba(243, 106, 62, 1)" />
          <stop offset="100%" stopColor="rgba(255, 179, 11, 1)" />
        </linearGradient>
      </defs>
      <path
        fill={color}
        d="m0 0 60 20.8C120 42 240 83 360 87.5s240-29.5 360-25 240 45.5 360 70.8c120 24.7 240 33.7 360 12.5 120-20.8 240-70.8 360-75 120-3.8 240 37.2 360 70.9 120 33.3 240 58.3 360 62.5 120 3.8 240-12.2 360-20.9 120-8.3 240-8.3 360-12.5 120-3.8 240-12.8 360-25 120-12.8 240-28.8 360-54.1C4080 67 4200 33 4320 37.5s240 45.5 360 66.7c120 20.8 240 20.8 360 4.1C5160 92 5280 58 5400 66.7c120 8.3 240 58.3 360 58.3s240-50 360-75 240-25 360-8.3c120 16.3 240 50.3 360 66.6 120 16.7 240 16.7 360 12.5 120-3.8 240-12.8 360-8.3s240 20.5 360 12.5 240-42 360-62.5 240-29.5 300-33.3l60-4.2v225H0Z"
        style={{
          transform: "translate(0,0)",
          opacity: 1,
        }}
      />
    </svg>
  );
};

export default BottomWave;
