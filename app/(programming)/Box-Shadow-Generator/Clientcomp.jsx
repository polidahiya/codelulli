"use client";

import { useState } from "react";

export default function BoxShadowGenerator() {
  const [hOffset, setHOffset] = useState(10);
  const [vOffset, setVOffset] = useState(10);
  const [blur, setBlur] = useState(15);
  const [spread, setSpread] = useState(0);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [shadowOpacity, setShadowOpacity] = useState(0.25);
  const [inset, setInset] = useState(false);

  const rgbaColor = hexToRgba(shadowColor, shadowOpacity);
  const boxShadow = `${
    inset ? "inset " : ""
  }${hOffset}px ${vOffset}px ${blur}px ${spread}px ${rgbaColor}`;

  const predefined = [
    {
      name: "Soft Glow",
      value: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    {
      name: "Deep Shadow",
      value: "0 8px 30px rgba(0, 0, 0, 0.3)",
    },
    {
      name: "Inset Light",
      value: "inset 2px 2px 10px rgba(0, 0, 0, 0.15)",
    },
    {
      name: "Hard Edged",
      value: "4px 4px 0px rgba(0, 0, 0, 0.5)",
    },
    {
      name: "Subtle Bottom",
      value: "0 2px 4px rgba(0, 0, 0, 0.05)",
    },
    {
      name: "Outline Glow",
      value: "0 0 10px rgba(0, 150, 255, 0.5)",
    },
    {
      name: "Frosted Glass",
      value: "0 10px 25px rgba(255, 255, 255, 0.1)",
    },
    {
      name: "Neumorphic Raised",
      value:
        "8px 8px 15px rgba(0, 0, 0, 0.2), -8px -8px 15px rgba(255, 255, 255, 0.7)",
    },
    {
      name: "Neumorphic Inset",
      value:
        "inset 4px 4px 10px rgba(0, 0, 0, 0.2), inset -4px -4px 10px rgba(255, 255, 255, 0.6)",
    },
    {
      name: "Hover Shadow",
      value: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    {
      name: "Floating Card",
      value: "0 12px 24px rgba(0, 0, 0, 0.15)",
    },
    {
      name: "Glow Blue",
      value: "0 0 12px rgba(0, 123, 255, 0.7)",
    },
    {
      name: "Glow Green",
      value: "0 0 12px rgba(40, 167, 69, 0.7)",
    },
    {
      name: "Glow Red",
      value: "0 0 12px rgba(220, 53, 69, 0.7)",
    },
    {
      name: "Inner Depth",
      value: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    {
      name: "3D Pressed",
      value:
        "inset 3px 3px 5px rgba(0, 0, 0, 0.25), inset -3px -3px 5px rgba(255, 255, 255, 0.2)",
    },
    {
      name: "Card Shadow",
      value: "0 6px 16px rgba(0, 0, 0, 0.1)",
    },
    {
      name: "Modal Shadow",
      value: "0 16px 48px rgba(0, 0, 0, 0.25)",
    },
    {
      name: "Tiny Shadow",
      value: "0 1px 3px rgba(0, 0, 0, 0.12)",
    },
  ];

  function hexToRgba(hex, alpha) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(`box-shadow: ${boxShadow};`);
    alert("✅ Box-shadow CSS copied!");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-6 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">
        🎨 Box Shadow Generator
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Preview */}
        <div className="md:sticky top-32 flex flex-col items-center gap-6 justify-center h-fit">
          <div
            className="w-64 h-64 bg-white dark:bg-gray-700 rounded-xl"
            style={{ boxShadow }}
          ></div>
          <div className="w-full text-sm mt-20">
            <p className="font-mono break-all bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
              box-shadow: {boxShadow};
            </p>
            <button
              onClick={copyToClipboard}
              className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
            >
              📋 Copy CSS
            </button>
          </div>
        </div>
        {/* Controls */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-4">
          <div>
            <label className="font-medium block">
              Horizontal Offset: {hOffset}px
            </label>
            <input
              type="range"
              min="-100"
              max="100"
              value={hOffset}
              onChange={(e) => setHOffset(+e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="font-medium block">
              Vertical Offset: {vOffset}px
            </label>
            <input
              type="range"
              min="-100"
              max="100"
              value={vOffset}
              onChange={(e) => setVOffset(+e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="font-medium block">Blur Radius: {blur}px</label>
            <input
              type="range"
              min="0"
              max="100"
              value={blur}
              onChange={(e) => setBlur(+e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="font-medium block">
              Spread Radius: {spread}px
            </label>
            <input
              type="range"
              min="-50"
              max="50"
              value={spread}
              onChange={(e) => setSpread(+e.target.value)}
              className="w-full"
            />
          </div>
          <div className="max-w-md mx-auto p-6">
            <ColorPicker
              selectedColor={shadowColor}
              onChange={setShadowColor}
            />
          </div>

          <div>
            <label className="font-medium block">
              Opacity: {Math.round(shadowOpacity * 100)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={shadowOpacity}
              onChange={(e) => setShadowOpacity(+e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="inset"
              checked={inset}
              onChange={(e) => setInset(e.target.checked)}
            />
            <label htmlFor="inset" className="cursor-pointer">
              Inset Shadow
            </label>
          </div>

          <div>
            <h2 className="font-semibold mb-2">🎯 Presets</h2>
            <div className="flex flex-wrap gap-2">
              {predefined.map((preset, idx) => (
                <button
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
                  onClick={() => {
                    const isInset = preset.value.includes("inset");
                    setInset(isInset);

                    // Try to find the last rgba() in the value
                    const rgbaMatch = preset.value.match(
                      /rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)/
                    );
                    if (!rgbaMatch) return;

                    const [_, r, g, b, a] = rgbaMatch;
                    setShadowColor(rgbToHex(Number(r), Number(g), Number(b)));
                    setShadowOpacity(Number(a));

                    // Extract numeric values before rgba (excluding 'inset' and commas)
                    const parts = preset.value
                      .replace("inset", "")
                      .replace(/rgba\(.*?\)/, "")
                      .trim()
                      .split(/\s+/);

                    setHOffset(parseInt(parts[0]) || 0);
                    setVOffset(parseInt(parts[1]) || 0);
                    setBlur(parseInt(parts[2]) || 0);
                    setSpread(parseInt(parts[3]) || 0);
                  }}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// components/ColorPicker.js
const predefinedColors = [
  "#000000",
  "#ffffff",
  "#f87171", // red-400
  "#60a5fa", // blue-400
  "#34d399", // green-400
  "#fbbf24", // yellow-400
  "#a78bfa", // purple-400
  "#fb7185", // pink-400
];

function ColorPicker({ selectedColor, onChange }) {
  const [customColor, setCustomColor] = useState("#000000");

  const handleSelect = (color) => {
    onChange(color);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">
        Choose a color:
      </h3>

      <div className="flex flex-wrap gap-2">
        {predefinedColors.map((color) => (
          <button
            key={color}
            onClick={() => handleSelect(color)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selectedColor === color
                ? "ring-2 ring-offset-2 ring-black dark:ring-white"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}

        {/* Custom color input */}
        <label
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
            selectedColor === customColor
              ? "ring-2 ring-offset-2 ring-black dark:ring-white"
              : "border-gray-300"
          }`}
        >
          <input
            type="color"
            className="opacity-0 absolute w-0 h-0"
            value={customColor}
            onChange={(e) => {
              setCustomColor(e.target.value);
              handleSelect(e.target.value);
            }}
          />
          🎨
        </label>
      </div>
    </div>
  );
}
