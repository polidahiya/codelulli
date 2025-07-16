"use client";
import { useState } from "react";
import { TbRotateClockwise2 } from "react-icons/tb";

const DEVICE_PRESETS = {
  "iPhone SE": { width: 375, height: 667 },
  "iPhone 13": { width: 390, height: 844 },
  "Pixel 7": { width: 412, height: 915 },
  "iPad Mini": { width: 768, height: 1024 },
  'iPad Pro 11"': { width: 834, height: 1194 },
  'Laptop 13"': { width: 1280, height: 800 },
  "Desktop 2K": { width: 1920, height: 1080 },
};

export default function ResponsivePreview() {
  const [url, setUrl] = useState("https://adorefurnix.com");
  const [device, setDevice] = useState("iPhone 13");
  const [rotated, setRotated] = useState(false);

  const baseDimensions = DEVICE_PRESETS[device];
  const width = rotated ? baseDimensions.height : baseDimensions.width;
  const height = rotated ? baseDimensions.width : baseDimensions.height;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Responsive Preview Tool
        </h1>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <input
            type="text"
            value={url}
            onChange={(e) =>
              setUrl(e.target.value || "https://adorefurnix.com")
            }
            className="flex-1 min-w-[250px] p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            placeholder="Enter website URL (https://...)"
          />

          <select
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
          >
            {Object.keys(DEVICE_PRESETS).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>

          <button
            onClick={() => setRotated((prev) => !prev)}
            className="p-2 px-4 flex items-center gap-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <TbRotateClockwise2 size={16} /> Rotate 90°
          </button>
        </div>

        <div className="flex justify-center overflow-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className="border border-gray-300 dark:border-gray-600 shadow-inner rounded overflow-hidden"
          >
            <iframe
              src={url}
              title="Responsive Preview"
              width="100%"
              height="100%"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              className="bg-white"
            />
          </div>
        </div>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          <strong>Device:</strong> {device} —{" "}
          {rotated ? `${height}×${width}` : `${width}×${height}`} px
        </p>
      </div>
    </div>
  );
}
