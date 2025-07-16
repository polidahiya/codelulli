"use client";

import React, { useEffect, useState } from "react";
import tinycolor from "tinycolor2";

const paletteModes = [
  "analogous",
  "monochromatic",
  "complement",
  "triad",
  "splitcomplement",
  "tetrad",
];

function generatePaletteFromBase(base, type) {
  const baseColor = tinycolor(base);
  let rawPalette;

  try {
    rawPalette =
      typeof baseColor[type] === "function"
        ? baseColor[type]()
        : baseColor.analogous();
  } catch {
    rawPalette = baseColor.analogous();
  }

  const paletteArray = Array.isArray(rawPalette) ? rawPalette : [rawPalette];
  return paletteArray.slice(0, 5).map((c) => tinycolor(c).toHexString());
}

export default function ColorPaletteGenerator() {
  const [hasMounted, setHasMounted] = useState(false);
  const [base, setBase] = useState("#000000");
  const [mode, setMode] = useState("analogous");
  const [colors, setColors] = useState([]);
  const [history, setHistory] = useState([]);

  // Prevent hydration mismatch
  useEffect(() => {
    setHasMounted(true);
    const randomBase = tinycolor.random().toHexString();
    setBase(randomBase);
    const newPalette = generatePaletteFromBase(randomBase, mode);
    setColors(newPalette);
  }, []);

  const regenerate = () => {
    // Slight hue shift for variation (e.g., -15 to +15 degrees)
    const shiftedBase = tinycolor(base).spin(
      Math.floor(Math.random() * 30 - 15)
    );
    const newPalette = generatePaletteFromBase(shiftedBase.toHexString(), mode);
    setHistory((prev) => [colors, ...prev]);
    setColors(newPalette);
  };

  const randomizeBase = () => {
    const newBase = tinycolor.random().toHexString();
    setBase(newBase);
    const newPalette = generatePaletteFromBase(newBase, mode);
    setHistory((prev) => [colors, ...prev]);
    setColors(newPalette);
  };

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    alert(`Copied: ${hex}`);
  };

  if (!hasMounted) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-10 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">
          🎨 Smart Color Palette Generator
        </h1>

        <p className="mb-6 text-center max-w-2xl text-gray-600 dark:text-gray-300">
          Create beautiful, designer-friendly color palettes using color harmony
          rules like Analogous, Complementary, and Triadic. Choose your base
          color and mode to generate palettes that actually work together.
        </p>

        <div className="flex flex-wrap gap-4 mb-6 items-center justify-center">
          <label>Mode:</label>
          <select
            value={mode}
            onChange={(e) => {
              const newMode = e.target.value;
              setMode(newMode);
              const newPalette = generatePaletteFromBase(base, newMode);
              setHistory((prev) => [colors, ...prev]);
              setColors(newPalette);
            }}
            className="px-3 py-1 rounded border border-gray-300 dark:bg-gray-800"
          >
            {paletteModes.map((m) => (
              <option key={m} value={m}>
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </option>
            ))}
          </select>

          <label>Base Color:</label>
          <input
            type="color"
            value={base}
            onChange={(e) => {
              const newBase = e.target.value;
              setBase(newBase);
              const newPalette = generatePaletteFromBase(newBase, mode);
              setHistory((prev) => [colors, ...prev]);
              setColors(newPalette);
            }}
            className="w-10 h-10 rounded border"
          />

          <button
            onClick={regenerate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
          >
            🔁 Regenerate Palette
          </button>

          <button
            onClick={randomizeBase}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow"
          >
            🎲 Randomize Base Color
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="w-32 h-32 rounded-lg shadow-lg cursor-pointer relative group"
              style={{ backgroundColor: color }}
              onClick={() => handleCopy(color)}
            >
              <span className="absolute bottom-2 left-2 bg-white/70 text-sm px-2 py-0.5 rounded group-hover:bg-white text-black">
                {color}
              </span>
            </div>
          ))}
        </div>

        {history.length > 0 && (
          <div className="mt-10 w-full">
            <h2 className="text-2xl font-semibold mb-4">🎯 Palette History</h2>
            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
              {history.map((palette, index) => (
                <div key={index} className="flex gap-2">
                  {palette.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-16 h-16 rounded shadow cursor-pointer relative group"
                      style={{ backgroundColor: color }}
                      onClick={() => handleCopy(color)}
                    >
                      <span className="absolute bottom-1 left-1 bg-white/70 text-xs px-1 py-0.5 rounded text-black">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
