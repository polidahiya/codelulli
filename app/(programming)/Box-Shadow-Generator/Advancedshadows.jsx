"use client";
import { useState } from "react";

const presets = {
  lifted: {
    blur: 40,
    opacity: 0.25,
    scaleX: 1.5,
    scaleY: 1,
    yOffset: 30,
    skewX: 0,
    skewY: 0,
  },
  flat: {
    blur: 20,
    opacity: 0.3,
    scaleX: 1.2,
    scaleY: 0.7,
    yOffset: 10,
    skewX: 0,
    skewY: 0,
  },
  sideLight: {
    blur: 35,
    opacity: 0.2,
    scaleX: 1.5,
    scaleY: 0.8,
    yOffset: 20,
    skewX: -15,
    skewY: 0,
  },
  tilted: {
    blur: 40,
    opacity: 0.2,
    scaleX: 1.6,
    scaleY: 1.2,
    yOffset: 35,
    skewX: 10,
    skewY: -10,
  },
};

export default function ShadowPreviewPage() {
  const [shadowColor, setShadowColor] = useState("#000000");
  const [blur, setBlur] = useState(30);
  const [opacity, setOpacity] = useState(0.2);
  const [scaleX, setScaleX] = useState(1.5);
  const [scaleY, setScaleY] = useState(1);
  const [yOffset, setYOffset] = useState(30);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const applyPreset = (presetName) => {
    const preset = presets[presetName];
    if (preset) {
      setBlur(preset.blur);
      setOpacity(preset.opacity);
      setScaleX(preset.scaleX);
      setScaleY(preset.scaleY);
      setYOffset(preset.yOffset);
      setSkewX(preset.skewX);
      setSkewY(preset.skewY);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Realistic Shadow Generator
      </h1>

      {/* Presets */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {Object.keys(presets).map((key) => (
          <button
            key={key}
            onClick={() => applyPreset(key)}
            className="px-4 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-4xl mx-auto">
        {[
          {
            label: "Shadow Color",
            type: "color",
            value: shadowColor,
            setter: setShadowColor,
          },
          {
            label: "Blur",
            min: 0,
            max: 100,
            value: blur,
            setter: setBlur,
          },
          {
            label: "Opacity",
            min: 0.01,
            max: 1,
            step: 0.01,
            value: opacity,
            setter: setOpacity,
          },
          {
            label: "Scale X",
            min: 0.1,
            max: 5,
            step: 0.1,
            value: scaleX,
            setter: setScaleX,
          },
          {
            label: "Scale Y",
            min: 0.1,
            max: 3,
            step: 0.05,
            value: scaleY,
            setter: setScaleY,
          },
          {
            label: "Y Offset",
            min: -10,
            max: 300,
            step: 1,
            value: yOffset,
            setter: setYOffset,
          },
          {
            label: "Skew X",
            min: -70,
            max: 70,
            step: 1,
            value: skewX,
            setter: setSkewX,
          },
          {
            label: "Skew Y",
            min: -70,
            max: 70,
            step: 1,
            value: skewY,
            setter: setSkewY,
          },
          {
            label: "Translate X",
            min: -100,
            max: 100,
            step: 1,
            value: translateX,
            setter: setTranslateX,
          },
          {
            label: "Translate Y",
            min: -100,
            max: 100,
            step: 1,
            value: translateY,
            setter: setTranslateY,
          },
        ].map(({ label, type = "range", ...props }, idx) => (
          <label className="flex flex-col text-sm" key={idx}>
            <span className="font-medium mb-1">{label}</span>
            <input
              type={type}
              className={type === "color" ? "h-10 w-16 p-1" : ""}
              {...(type === "range"
                ? { min: props.min, max: props.max, step: props.step || 1 }
                : {})}
              value={props.value}
              onChange={(e) =>
                type === "color"
                  ? props.setter(e.target.value)
                  : props.setter(Number(e.target.value))
              }
            />
            {type === "range" && (
              <span className="text-xs mt-1">Value: {props.value}</span>
            )}
          </label>
        ))}
      </div>

      {/* Preview */}
      <ShadowCard
        shadowColor={shadowColor}
        blur={blur}
        opacity={opacity}
        scaleX={scaleX}
        scaleY={scaleY}
        yOffset={yOffset}
        skewX={skewX}
        skewY={skewY}
        translateX={translateX}
        translateY={translateY}
      />
    </div>
  );
}

// ShadowCard Component
function ShadowCard({
  shadowColor = "#000",
  blur = 30,
  opacity = 0.2,
  scaleX = 1.5,
  scaleY = 1,
  yOffset = 30,
  skewX = 0,
  skewY = 0,
  translateX = 0,
  translateY = 0,
}) {
  const className = "shadow-box";

  const cssOutput = `
.${className} {
  position: relative;
  z-index: 1;
}
.${className}::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -${yOffset}px;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${hexToRgba(shadowColor, opacity)};
  filter: blur(${blur}px);
  transform:
    translate(-50%, 0)
    translateX(${translateX}px)
    translateY(${translateY}px)
    scaleX(${scaleX})
    scaleY(${scaleY})
    skew(${skewX}deg, ${skewY}deg);
  z-index: -1;
}
`;

  return (
    <>
      {/* Main Object */}
      <div
        className={`${className} w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-100 via-white to-blue-200 shadow-inner border border-blue-200`}
      />

      {/* CSS Output */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 mt-6 rounded-lg shadow">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Generated CSS with `::after`
        </h3>
        <pre className="bg-white dark:bg-gray-900 p-4 rounded text-xs overflow-x-auto border dark:border-gray-700">
          {cssOutput}
        </pre>
        <button
          className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          onClick={() => {
            navigator.clipboard.writeText(cssOutput);
            alert("CSS copied to clipboard!");
          }}
        >
          Copy CSS
        </button>
      </div>
    </>
  );
}

// Utility function
function hexToRgba(hex, opacity) {
  const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthand, (_, r, g, b) => r + r + g + g + b + b);

  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!match) return hex;
  const [, r, g, b] = match.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
