import React from "react";

const TopWave = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "rotate(180deg)",
        transition: ".3s",
      }}
      viewBox="0 0 1440 230"
    >
      <defs>
        <linearGradient id="a" x1={1} x2={0} y1={0} y2={0}>
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#fff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="m0 0 34.3 20C68.6 40 137 80 206 88c68.3 8 137-16 205-8 69 8 138 48 206 68 68.7 20 137 20 206-8 68.4-28 137-84 206-88 68.1-4 137 44 205 64 68.9 20 137 12 206-4 68.6-16 137-40 206-24 68.3 16 137 72 205 88 69 16 138-8 206-32 68.7-24 137-48 206-44 68.4 4 137 36 206 56 68.1 20 137 28 205 4 68.9-24 137-80 206-92 68.6-12 137 20 206 28 68.3 8 137-8 205 4 69 12 138 52 206 60 68.7 8 137-16 206-20 68.4-4 137 12 206 8 68.1-4 137-28 205-32 68.9-4 137 12 206 12 68.6 0 137-16 206-36 68.3-20 137-44 205-24 69 20 138 84 172 116l34.1 32v24H0Z"
        style={{
          transform: "translate(0,0)",
          opacity: 1,
        }}
      />
    </svg>
  );
};

export default TopWave;
