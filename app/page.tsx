"use client";

import { useState } from "react";

export default function Home() {
  const [eyeColors, setEyeColors] = useState({
    "grandma1": "unknown",
    "grandpa1": "unknown",
    "grandma2": "unknown",
    "grandpa2": "unknown",
    "mother": "brown",
    "father": "green",
  });

  const handleChange = (member: string, color: string) => {
    setEyeColors((prev) => ({ ...prev, [member]: color }));
  };

  const options = [
    { color: "unknown", label: "❓" },
    { color: "brown", label: "" },
    { color: "blue", label: "" },
    { color: "green", label: "" },
  ];

  const renderSelect = (member: string, label: string) => (
    <div className="flex flex-col items-center space-y-3">
      <span className="mb-2">{label}</span>
      <div className="flex space-x-3">
        {options.filter((opt) => (label != "Mother" && label != "Father") || opt.color !== "unknown").map((opt) => (
          <button
            key={opt.color}
            onClick={() => handleChange(member, opt.color)}
            className={`w-12 h-12 flex justify-center items-center rounded-full focus:outline-none w-10 h-10 ${
              eyeColors[member] === opt.color ? "border-[3px] border-spacing-2 border-black shadow-lg": ""
            }`}
            style={{
              backgroundColor: getColorStyle(opt.color),
            }}
            aria-label={opt.label}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  const getColorStyle = (color: string) => {
    switch (color) {
      case 'brown': return '#8B4513';
      case 'blue': return '#1E90FF';
      case 'green': return '#32CD32';
      default: return '#D3D3D3'; // unknown
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-24">Child Eye Color Calculator</h1>
      
      {/* Grandparents (First Line) */}
      <div className="flex justify-around w-full max-w-lg mb-12 space-x-16">
        {renderSelect("grandma1", "Grandma")}
        {renderSelect("grandpa1", "Grandpa")}
        {renderSelect("grandma2", "Grandma")}
        {renderSelect("grandpa2", "Grandpa")}
      </div>

      {/* Parents (Second Line) */}
      <div className="flex justify-around w-full max-w-lg mb-8 space-x-16 mt-8">
        <div className="w-full pr-64 mr-16">{renderSelect("mother", "Mother")}</div>
        
        {renderSelect("father", "Father")}
      </div>
      
      <button
        onClick={() => alert('hi')}
        className="mt-12 px-6 py-2 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600"
      >
        See Baby Eye Color Probabilities
      </button>
    </div>
  );
}