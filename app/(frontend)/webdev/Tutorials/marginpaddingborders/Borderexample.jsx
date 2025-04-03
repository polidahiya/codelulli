"use client";
import React, { useState } from "react";
import { Button, ControlGroup } from "@/app/(frontend)/_globalcomps/Buttonandbuttongroup";
import Codedisplay from "@/app/(frontend)/_globalcomps/Codedisplay";

function BorderExample() {
  const [borderWidth, setBorderWidth] = useState("2px");
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderColor, setBorderColor] = useState("black");

  return (
    <>
      <div className="bg-gray-200 p-4 flex justify-center">
        <div
          style={{ border: `${borderWidth} ${borderStyle} ${borderColor}` }}
          className="p-4"
        >
          Border Example
        </div>
      </div>
      <Codedisplay
        language="html"
        code={`<style>
      .box{
        border: ${borderWidth} ${borderStyle} ${borderColor};
      }
</style>`}
      />

      {/* Border Width */}
      <ControlGroup title="Border Width">
        {["1px", "2px", "4px", "6px", "8px"].map((width) => (
          <Button key={width} onClick={() => setBorderWidth(width)}>
            {width}
          </Button>
        ))}
      </ControlGroup>

      {/* Border Style */}
      <ControlGroup title="Border Style">
        {["solid", "dashed", "dotted", "double", "groove", "ridge"].map(
          (style) => (
            <Button key={style} onClick={() => setBorderStyle(style)}>
              {style}
            </Button>
          )
        )}
      </ControlGroup>

      {/* Border Color */}
      <ControlGroup title="Border Color">
        {["black", "red", "blue", "green", "orange", "purple"].map((color) => (
          <Button key={color} onClick={() => setBorderColor(color)}>
            {color}
          </Button>
        ))}
      </ControlGroup>
    </>
  );
}

export default BorderExample;
