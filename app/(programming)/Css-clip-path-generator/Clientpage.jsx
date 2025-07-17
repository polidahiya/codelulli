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
  Trapezoid: [
    { x: 20, y: 0 },
    { x: 80, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
  ],
  Parallelogram: [
    { x: 25, y: 0 },
    { x: 100, y: 0 },
    { x: 75, y: 100 },
    { x: 0, y: 100 },
  ],
  Rhombus: [
    { x: 50, y: 0 },
    { x: 100, y: 50 },
    { x: 50, y: 100 },
    { x: 0, y: 50 },
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
  Heptagon: [
    { x: 50, y: 0 },
    { x: 90, y: 20 },
    { x: 100, y: 60 },
    { x: 75, y: 100 },
    { x: 25, y: 100 },
    { x: 0, y: 60 },
    { x: 10, y: 20 },
  ],
  Octagon: [
    { x: 30, y: 0 },
    { x: 70, y: 0 },
    { x: 100, y: 30 },
    { x: 100, y: 70 },
    { x: 70, y: 100 },
    { x: 30, y: 100 },
    { x: 0, y: 70 },
    { x: 0, y: 30 },
  ],
  Nonagon: [
    { x: 50, y: 0 },
    { x: 83, y: 12 },
    { x: 100, y: 43 },
    { x: 94, y: 78 },
    { x: 68, y: 100 },
    { x: 32, y: 100 },
    { x: 6, y: 78 },
    { x: 0, y: 43 },
    { x: 17, y: 12 },
  ],
  Decagon: [
    { x: 50, y: 0 },
    { x: 80, y: 10 },
    { x: 100, y: 35 },
    { x: 100, y: 70 },
    { x: 80, y: 90 },
    { x: 50, y: 100 },
    { x: 20, y: 90 },
    { x: 0, y: 70 },
    { x: 0, y: 35 },
    { x: 20, y: 10 },
  ],
  Bevel: [
    { x: 20, y: 0 },
    { x: 80, y: 0 },
    { x: 100, y: 20 },
    { x: 100, y: 80 },
    { x: 80, y: 100 },
    { x: 20, y: 100 },
    { x: 0, y: 80 },
    { x: 0, y: 20 },
  ],
  Rabbet: [
    { x: 0, y: 15 },
    { x: 15, y: 15 },
    { x: 15, y: 0 },
    { x: 85, y: 0 },
    { x: 85, y: 15 },
    { x: 100, y: 15 },
    { x: 100, y: 85 },
    { x: 85, y: 85 },
    { x: 85, y: 100 },
    { x: 15, y: 100 },
    { x: 15, y: 85 },
    { x: 0, y: 85 },
  ],
  "Left Arrow": [
    { x: 40, y: 0 },
    { x: 40, y: 20 },
    { x: 100, y: 20 },
    { x: 100, y: 80 },
    { x: 40, y: 80 },
    { x: 40, y: 100 },
    { x: 0, y: 50 },
  ],
  "Right Arrow": [
    { x: 0, y: 20 },
    { x: 60, y: 20 },
    { x: 60, y: 0 },
    { x: 100, y: 50 },
    { x: 60, y: 100 },
    { x: 60, y: 80 },
    { x: 0, y: 80 },
  ],
  "Left Point": [
    { x: 25, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 25, y: 100 },
    { x: 0, y: 50 },
  ],
  "Right Point": [
    { x: 0, y: 0 },
    { x: 75, y: 0 },
    { x: 100, y: 50 },
    { x: 75, y: 100 },
    { x: 0, y: 100 },
  ],
  "Left Chevron": [
    { x: 100, y: 0 },
    { x: 75, y: 50 },
    { x: 100, y: 100 },
    { x: 25, y: 100 },
    { x: 0, y: 50 },
    { x: 25, y: 0 },
  ],
  "Right Chevron": [
    { x: 75, y: 0 },
    { x: 100, y: 50 },
    { x: 75, y: 100 },
    { x: 0, y: 100 },
    { x: 25, y: 50 },
    { x: 0, y: 0 },
  ],
  Cross: [
    { x: 10, y: 25 },
    { x: 35, y: 25 },
    { x: 35, y: 0 },
    { x: 65, y: 0 },
    { x: 65, y: 25 },
    { x: 90, y: 25 },
    { x: 90, y: 50 },
    { x: 65, y: 50 },
    { x: 65, y: 100 },
    { x: 35, y: 100 },
    { x: 35, y: 50 },
    { x: 10, y: 50 },
  ],
  Message: [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 75 },
    { x: 75, y: 75 },
    { x: 75, y: 100 },
    { x: 50, y: 75 },
    { x: 0, y: 75 },
  ],
  Close: [
    { x: 20, y: 0 },
    { x: 0, y: 20 },
    { x: 30, y: 50 },
    { x: 0, y: 80 },
    { x: 20, y: 100 },
    { x: 50, y: 70 },
    { x: 80, y: 100 },
    { x: 100, y: 80 },
    { x: 70, y: 50 },
    { x: 100, y: 20 },
    { x: 80, y: 0 },
    { x: 50, y: 30 },
  ],
  Frame: [
    { x: 0, y: 0 },
    { x: 0, y: 100 },
    { x: 25, y: 100 },
    { x: 25, y: 25 },
    { x: 75, y: 25 },
    { x: 75, y: 75 },
    { x: 25, y: 75 },
    { x: 25, y: 100 },
    { x: 100, y: 100 },
    { x: 100, y: 0 },
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
  Heart: [
    { x: 50, y: 90 },
    { x: 0, y: 50 },
    { x: 25, y: 15 },
    { x: 50, y: 30 },
    { x: 75, y: 15 },
    { x: 100, y: 50 },
  ],

  Shield: [
    { x: 50, y: 0 },
    { x: 100, y: 25 },
    { x: 85, y: 100 },
    { x: 50, y: 85 },
    { x: 15, y: 100 },
    { x: 0, y: 25 },
  ],

  Trapezoid: [
    { x: 20, y: 0 },
    { x: 80, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
  ],

  Parallelogram: [
    { x: 25, y: 0 },
    { x: 100, y: 0 },
    { x: 75, y: 100 },
    { x: 0, y: 100 },
  ],

  "Ticket Stub": [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 40 },
    { x: 90, y: 50 },
    { x: 100, y: 60 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
    { x: 0, y: 60 },
    { x: 10, y: 50 },
    { x: 0, y: 40 },
  ],

  "Play Button": [
    { x: 20, y: 10 },
    { x: 80, y: 50 },
    { x: 20, y: 90 },
  ],

  "Arrow Up": [
    { x: 50, y: 0 },
    { x: 100, y: 50 },
    { x: 75, y: 50 },
    { x: 75, y: 100 },
    { x: 25, y: 100 },
    { x: 25, y: 50 },
    { x: 0, y: 50 },
  ],

  "Arrow Down": [
    { x: 0, y: 50 },
    { x: 25, y: 50 },
    { x: 25, y: 0 },
    { x: 75, y: 0 },
    { x: 75, y: 50 },
    { x: 100, y: 50 },
    { x: 50, y: 100 },
  ],

  Burst: [
    { x: 50, y: 0 },
    { x: 60, y: 25 },
    { x: 85, y: 15 },
    { x: 75, y: 40 },
    { x: 100, y: 50 },
    { x: 75, y: 60 },
    { x: 85, y: 85 },
    { x: 60, y: 75 },
    { x: 50, y: 100 },
    { x: 40, y: 75 },
    { x: 15, y: 85 },
    { x: 25, y: 60 },
    { x: 0, y: 50 },
    { x: 25, y: 40 },
    { x: 15, y: 15 },
    { x: 40, y: 25 },
  ],

  "Chevron Down Wide": [
    { x: 0, y: 30 },
    { x: 50, y: 70 },
    { x: 100, y: 30 },
    { x: 100, y: 0 },
    { x: 50, y: 40 },
    { x: 0, y: 0 },
  ],

  "Notched Rectangle": [
    { x: 10, y: 0 },
    { x: 90, y: 0 },
    { x: 100, y: 10 },
    { x: 100, y: 90 },
    { x: 90, y: 100 },
    { x: 10, y: 100 },
    { x: 0, y: 90 },
    { x: 0, y: 10 },
  ],

  "Tab Shape": [
    { x: 0, y: 0 },
    { x: 80, y: 0 },
    { x: 100, y: 20 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
  ],
};

const testimages = [
  "https://images.pexels.com/photos/30201309/pexels-photo-30201309.jpeg",
  "https://images.pexels.com/photos/32386044/pexels-photo-32386044.jpeg",
  "https://images.pexels.com/photos/29380262/pexels-photo-29380262.jpeg",
  "https://images.pexels.com/photos/32278351/pexels-photo-32278351.jpeg",
];

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
  const [selectedimage, setselectedimage] = useState(0);
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

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="sticky top-20 h-fit">
          {/* display */}
          <div
            ref={boxRef}
            className="relative h-96 bg-white dark:bg-gray-800 border-2 border-dashed border-gray-400 rounded-lg"
          >
            <div
              className="absolute w-full h-full"
              style={{
                clipPath,
                backgroundColor: "#38bdf8",
                backgroundImage: `url(${testimages[selectedimage || 0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
          {/* output css */}
          <div className="bg-gray-800 text-green-300 p-4 rounded font-mono break-all mt-10">
            clip-path:
            <br />
            <code>{clipPath};</code>
          </div>
          <button
            onClick={() =>
              navigator.clipboard.writeText(`clip-path: ${clipPath};`)
            }
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-2"
          >
            Copy to Clipboard
          </button>
        </div>
        <div className="space-y-4 select-none">
          <div>
            <div className="flex gap-2 overflow-x-scroll">
              {testimages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={"img-" + i}
                  className="w-44 aspect-square"
                  onClick={() => setselectedimage(i)}
                />
              ))}
            </div>
          </div>
          {/* Shape Select */}
          <div className="grid grid-cols-7 gap-4 my-4">
            {shapeOptions.map((shape) => {
              let previewClip;
              if (polygonPresets[shape]) {
                const pts = polygonPresets[shape]
                  .map((p) => `${p.x}% ${p.y}%`)
                  .join(", ");
                previewClip = `polygon(${pts})`;
              } else if (shape === "Circle") {
                previewClip = "circle(30% at 50% 50%)";
              } else if (shape === "Ellipse") {
                previewClip = "ellipse(40% 25% at 50% 50%)";
              } else if (shape === "Inset") {
                previewClip = "inset(10% 10% 10% 10%)";
              }

              return (
                <div
                  key={shape}
                  onClick={() =>
                    handleShapeChange({ target: { value: shape } })
                  }
                  className="w-full cursor-pointer text-center"
                >
                  <div
                    className="w-full aspect-square mx-auto mb-1"
                    style={{
                      clipPath: previewClip,
                      backgroundColor: "#38bdf8",
                    }}
                  />
                  <div className="text-sm">{shape}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
