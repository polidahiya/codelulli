"use client";
import React, { useState } from "react";
import Codedisplay from "@/app/(frontend)/_globalcomps/Codedisplay";
import { Button, ControlGroup } from "@/app/(frontend)/_globalcomps/Buttonandbuttongroup";

function CssPropertiesExample() {
  const text = "This is a test text";
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "black",
    "white",
    "gray",
  ];
  const lengths = ["100px", "200px", "300px", "400px", "500px"];

  const [selectedOptions, setSelectedOptions] = useState({
    color: "red",
    background: "green",
    height: "200px",
    width: "200px",
  });

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Code Display */}
        <div className="flex-1">
          <Codedisplay
            language="html"
            code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Css properties</title>
    <style>
        div {
            ${selectedOptions?.color && `color: ${selectedOptions?.color};`}
            ${
              selectedOptions?.background &&
              `background: ${selectedOptions?.background};`
            }
            ${selectedOptions?.height && `height: ${selectedOptions?.height};`}
            ${selectedOptions?.width && `width: ${selectedOptions?.width};`}
        }
    </style>
</head>
<body>
    <div>${text}</div>
</body>
</html>`}
          />
        </div>

        {/* Output */}
        <div className="flex-1">
          <p className="text-center text-lg font-semibold">Output</p>
          <div className="border min-h-64 p-4 flex justify-center items-center">
            <div
              style={{
                color: selectedOptions?.color,
                backgroundColor: selectedOptions?.background,
                height: selectedOptions?.height,
                width: selectedOptions?.width,
              }}
              className="flex items-center justify-center border rounded-md duration-300"
            >
              {text}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 space-y-4">
        <ControlGroup title="Color">
          {colors.map((color) => (
            <Button
              key={color}
              style={{ color }}
              onClick={() => setSelectedOptions((prev) => ({ ...prev, color }))}
            >
              {color}
            </Button>
          ))}
        </ControlGroup>

        <ControlGroup title="Background">
          {colors.map((color) => (
            <Button
              key={color}
              style={{ color }}
              onClick={() =>
                setSelectedOptions((prev) => ({ ...prev, background: color }))
              }
            >
              {color}
            </Button>
          ))}
        </ControlGroup>

        <ControlGroup title="Height">
          {lengths.map((size) => (
            <Button
              key={size}
              onClick={() =>
                setSelectedOptions((prev) => ({ ...prev, height: size }))
              }
            >
              {size}
            </Button>
          ))}
        </ControlGroup>

        <ControlGroup title="Width">
          {lengths.map((size) => (
            <Button
              key={size}
              onClick={() =>
                setSelectedOptions((prev) => ({ ...prev, width: size }))
              }
            >
              {size}
            </Button>
          ))}
        </ControlGroup>
      </div>
    </div>
  );
}

export default CssPropertiesExample;
