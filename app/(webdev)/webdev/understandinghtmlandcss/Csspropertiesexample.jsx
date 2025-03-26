"use client";
import React, { useState } from "react";
import Codedisplay from "@/app/_globalcomps/Codedisplay";

function Csspropertiesexample() {
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

  const [selectedoptions, setselectedoptions] = useState({
    color: "red",
    background: "green",
    height: "200px",
    width: "200px",
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5">
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
            ${selectedoptions?.color && `color: ${selectedoptions?.color};`}
            ${
              selectedoptions?.background &&
              `background: ${selectedoptions?.background};`
            }
            ${selectedoptions?.height && `height: ${selectedoptions?.height};`}
            ${selectedoptions?.width && `width: ${selectedoptions?.width};`}
            /* ...more properties here */
        }
    </style>
</head>
<body>
    <div>${text}</div>
    </body>
    </html>`}
          />
        </div>
        <div className="flex-1">
          <p className="text-center">Output</p>
          <div className="border min-h-64 overflow-scroll">
            <div
              style={{
                color: selectedoptions?.color,
                backgroundColor: selectedoptions?.background,
                height: selectedoptions?.height,
                width: selectedoptions?.width,
              }}
              className="duration-300"
            >
              {text}
            </div>
          </div>
        </div>
      </div>
      {/* options */}
      <div>
        {/* colors */}
        <div className="flex flex-wrap gap-2 items-center mt-2">
          <span>Color : </span>
          {colors.map((item, i) => (
            <button
              className="border px-5 py-1 rounded-md"
              key={i}
              style={{ color: item }}
              onClick={() =>
                setselectedoptions((pre) => ({ ...pre, color: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
        {/* background */}
        <div className="flex flex-wrap gap-2 items-center mt-2">
          <span>Background : </span>
          {colors.map((item, i) => (
            <button
              className="border px-5 py-1 rounded-md"
              key={i}
              style={{ color: item }}
              onClick={() =>
                setselectedoptions((pre) => ({ ...pre, background: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
        {/* height */}
        <div className="flex flex-wrap gap-2 items-center mt-2">
          <span>Height : </span>
          {lengths.map((item, i) => (
            <button
              className="border px-5 py-1 rounded-md"
              key={i}
              onClick={() =>
                setselectedoptions((pre) => ({ ...pre, height: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
        {/* width */}
        <div className="flex flex-wrap gap-2 items-center mt-2">
          <span>Width : </span>
          {lengths.map((item, i) => (
            <button
              className="border px-5 py-1 rounded-md"
              key={i}
              onClick={() =>
                setselectedoptions((pre) => ({ ...pre, width: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Csspropertiesexample;
