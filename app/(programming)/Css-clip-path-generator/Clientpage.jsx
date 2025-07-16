"use client";
import { useRef, useState } from "react";

// Polygon presets
const polygonPresets = {
  Triangle: [
    { x: 50, y: 10 },
    { x: 90, y: 90 },
    { x: 10, y: 90 },
  ],
  Rectangle: [
    { x: 10, y: 10 },
    { x: 90, y: 10 },
    { x: 90, y: 90 },
    { x: 10, y: 90 },
  ],
  Pentagon: [
    { x: 50, y: 5 },
    { x: 90, y: 35 },
    { x: 72, y: 85 },
    { x: 28, y: 85 },
    { x: 10, y: 35 },
  ],
  Hexagon: [
    { x: 25, y: 10 },
    { x: 75, y: 10 },
    { x: 90, y: 50 },
    { x: 75, y: 90 },
    { x: 25, y: 90 },
    { x: 10, y: 50 },
  ],
  Star: [
    { x: 50, y: 5 },
    { x: 60, y: 38 },
    { x: 95, y: 38 },
    { x: 68, y: 60 },
    { x: 78, y: 95 },
    { x: 50, y: 75 },
    { x: 22, y: 95 },
    { x: 32, y: 60 },
    { x: 5, y: 38 },
    { x: 40, y: 38 },
  ],
};

export default function ClipPathPage() {
  const boxRef = useRef(null);
  const shapeOptions = [
    ...Object.keys(polygonPresets),
    "Circle",
    "Ellipse",
    "Inset",
  ];

  const [selectedShape, setSelectedShape] = useState("Rectangle");
  const [points, setPoints] = useState(polygonPresets["Rectangle"]);
  const [circle, setCircle] = useState({ radius: 30, cx: 50, cy: 50 });
  const [ellipse, setEllipse] = useState({ rx: 40, ry: 25, cx: 50, cy: 50 });

  const [dragIndex, setDragIndex] = useState(null); // polygon
  const [dragCircle, setDragCircle] = useState(null); // 'center' | 'radius'
  const [dragEllipse, setDragEllipse] = useState(null); // 'center' | 'rx' | 'ry'

  const isPolygon = selectedShape in polygonPresets;
  const isCircle = selectedShape === "Circle";
  const isEllipse = selectedShape === "Ellipse";

  const clipPath = isPolygon
    ? `polygon(${points
        .map((p) => `${Math.floor(p.x)}% ${Math.floor(p.y)}%`)
        .join(", ")})`
    : isCircle
    ? `circle(${Math.floor(circle.radius)}% at ${Math.floor(
        circle.cx
      )}% ${Math.floor(circle.cy)}%)`
    : isEllipse
    ? `ellipse(${Math.floor(ellipse.rx)}% ${Math.floor(
        ellipse.ry
      )}% at ${Math.floor(ellipse.cx)}% ${Math.floor(ellipse.cy)}%)`
    : `inset(10% 10% 10% 10%)`;

  const getTouchXY = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    return { x, y };
  };

  const handleMove = (e) => {
    const { x, y } = getTouchXY(e);

    if (isPolygon && dragIndex !== null) {
      setPoints((prev) => {
        const updated = [...prev];
        updated[dragIndex] = {
          x: Math.max(0, Math.min(100, x)),
          y: Math.max(0, Math.min(100, y)),
        };
        return updated;
      });
    }

    if (isCircle && dragCircle) {
      if (dragCircle === "center") {
        setCircle((prev) => ({ ...prev, cx: x, cy: y }));
      } else if (dragCircle === "radius") {
        const dx = x - circle.cx;
        const dy = y - circle.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        setCircle((prev) => ({
          ...prev,
          radius: Math.min(50, Math.max(1, dist)),
        }));
      }
    }

    if (isEllipse && dragEllipse) {
      if (dragEllipse === "center") {
        setEllipse((prev) => ({ ...prev, cx: x, cy: y }));
      } else if (dragEllipse === "rx") {
        const dx = x - ellipse.cx;
        setEllipse((prev) => ({
          ...prev,
          rx: Math.min(50, Math.max(1, Math.abs(dx))),
        }));
      } else if (dragEllipse === "ry") {
        const dy = y - ellipse.cy;
        setEllipse((prev) => ({
          ...prev,
          ry: Math.min(50, Math.max(1, Math.abs(dy))),
        }));
      }
    }
  };

  const stopDragging = () => {
    setDragIndex(null);
    setDragCircle(null);
    setDragEllipse(null);
  };

  const handleShapeChange = (e) => {
    const shape = e.target.value;
    setSelectedShape(shape);
    if (polygonPresets[shape]) setPoints(polygonPresets[shape]);
    if (shape === "Circle") setCircle({ radius: 30, cx: 50, cy: 50 });
    if (shape === "Ellipse") setEllipse({ rx: 40, ry: 25, cx: 50, cy: 50 });
  };

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseUp={stopDragging}
      onTouchEnd={stopDragging}
    >
      <h1 className="text-3xl font-bold mb-6">CSS Clip-path Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Clip Preview */}
        <div
          ref={boxRef}
          className="relative h-96 bg-white dark:bg-gray-800 border-2 border-dashed border-gray-400 rounded-lg overflow-hidden"
        >
          <div
            className="absolute w-full h-full"
            style={{
              clipPath,
              backgroundColor: "#38bdf8",
            }}
          />

          {/* Polygon Handles */}
          {isPolygon &&
            points.map((p, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseDown={() => setDragIndex(i)}
                onTouchStart={() => setDragIndex(i)}
              />
            ))}

          {/* Circle Handles */}
          {isCircle && (
            <>
              <div
                className="absolute w-4 h-4 bg-yellow-500 border-2 border-white rounded-full"
                style={{
                  left: `${circle.cx}%`,
                  top: `${circle.cy}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseDown={() => setDragCircle("center")}
                onTouchStart={() => setDragCircle("center")}
              />
              <div
                className="absolute w-3 h-3 bg-blue-500 border-2 border-white rounded-full"
                style={{
                  left: `${circle.cx + circle.radius}%`,
                  top: `${circle.cy}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseDown={() => setDragCircle("radius")}
                onTouchStart={() => setDragCircle("radius")}
              />
            </>
          )}

          {/* Ellipse Handles */}
          {isEllipse && (
            <>
              <div
                className="absolute w-4 h-4 bg-yellow-500 border-2 border-white rounded-full"
                style={{
                  left: `${ellipse.cx}%`,
                  top: `${ellipse.cy}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseDown={() => setDragEllipse("center")}
                onTouchStart={() => setDragEllipse("center")}
              />
              <div
                className="absolute w-3 h-3 bg-blue-500 border-2 border-white rounded-full"
                style={{
                  left: `${ellipse.cx + ellipse.rx}%`,
                  top: `${ellipse.cy}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseDown={() => setDragEllipse("rx")}
                onTouchStart={() => setDragEllipse("rx")}
              />
              <div
                className="absolute w-3 h-3 bg-green-500 border-2 border-white rounded-full"
                style={{
                  left: `${ellipse.cx}%`,
                  top: `${ellipse.cy + ellipse.ry}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseDown={() => setDragEllipse("ry")}
                onTouchStart={() => setDragEllipse("ry")}
              />
            </>
          )}
        </div>

        {/* CSS Output */}
        <div className="space-y-4">
          <div className="bg-gray-800 text-green-300 p-4 rounded font-mono break-all">
            clip-path:
            <br />
            <code>{clipPath};</code>
          </div>
          <button
            onClick={() =>
              navigator.clipboard.writeText(`clip-path: ${clipPath};`)
            }
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Copy to Clipboard
          </button>
          {/* Shape Select */}
          <div className="mb-4">
            <label className="text-lg font-semibold mr-4">Select Shape:</label>
            {shapeOptions.map((shape) => (
              <div key={shape}>
                <div
                  className="w-40 aspect-square"
                  style={{
                    clipPath,
                    backgroundColor: "#38bdf8",
                  }}
                ></div>
                {shape}
              </div>
            ))}
            <select
              value={selectedShape}
              onChange={handleShapeChange}
              className="px-3 py-2 rounded border dark:bg-gray-800 dark:border-gray-600"
            >
              {shapeOptions.map((shape) => (
                <option key={shape} value={shape}>
                  {shape}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
