import React from "react";

const Scoredisplay = ({ score = 75, text = "Score" }) => {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center h-64 w-full">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90 text-gray-200 dark:text-gray-700"
      >
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#3b82f6" // Tailwind blue-500
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold text-gray-700 dark:text-gray-100">
          {score}%
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{text}</div>
      </div>
    </div>
  );
};

export default Scoredisplay;
