"use client";
import React, { useState } from "react";
import { Button, ControlGroup } from "@/app/_globalcomps/Buttonandbuttongroup";
import Codedisplay from "@/app/_globalcomps/Codedisplay";

function FlexboxExample() {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("flex-start");
  const [align, setAlign] = useState("stretch");
  const [gap, setGap] = useState("0px");

  return (
    <div className="p-6">
      <div className="bg-slate-300 p-4 rounded-lg shadow-md">
        <p className="text-lg font-semibold mb-2">Parent</p>
        <div
          className="border p-4 bg-white rounded-lg min-h-[200px]"
          style={{
            display: "flex",
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            gap: gap,
          }}
        >
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-20 aspect-square bg-red-500 border-2 border-green-600 flex items-center justify-center text-white font-bold shadow-sm"
            >
              box{num}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold">Controls</h3>

        <ControlGroup title="flex-direction">
          <Button onClick={() => setDirection("row")}>row</Button>
          <Button onClick={() => setDirection("row-reverse")}>
            row-reverse
          </Button>
          <Button onClick={() => setDirection("column")}>column</Button>
          <Button onClick={() => setDirection("column-reverse")}>
            column-reverse
          </Button>
        </ControlGroup>

        <ControlGroup title="justify-content">
          <Button onClick={() => setJustify("flex-start")}>flex-start</Button>
          <Button onClick={() => setJustify("center")}>center</Button>
          <Button onClick={() => setJustify("flex-end")}>flex-end</Button>
          <Button onClick={() => setJustify("space-between")}>
            space-between
          </Button>
          <Button onClick={() => setJustify("space-around")}>
            space-around
          </Button>
          <Button onClick={() => setJustify("space-evenly")}>
            space-evenly
          </Button>
        </ControlGroup>

        <ControlGroup title="align-items">
          <Button onClick={() => setAlign("stretch")}>stretch</Button>
          <Button onClick={() => setAlign("flex-start")}>flex-start</Button>
          <Button onClick={() => setAlign("center")}>center</Button>
          <Button onClick={() => setAlign("flex-end")}>flex-end</Button>
          <Button onClick={() => setAlign("baseline")}>baseline</Button>
        </ControlGroup>

        <ControlGroup title="gap">
          <Button onClick={() => setGap("0px")}>0px</Button>
          <Button onClick={() => setGap("10px")}>10px</Button>
          <Button onClick={() => setGap("20px")}>20px</Button>
          <Button onClick={() => setGap("30px")}>30px</Button>
        </ControlGroup>
      </div>
      <div className="mt-5">
        <Codedisplay
          language="html"
          code={` <style>
        .parent{
            display: flex;
            flex-direction: ${direction};
            align-items: ${align};
            justify-content: ${justify};
            gap: ${gap};
        }
        .box{
            width: 80px;
            height: 80px;
            background:red;
            border: 2px solid green;
            color: white;
        }
      </style>
      <div className="parent">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
        `}
        />
      </div>
    </div>
  );
}

export default FlexboxExample;
