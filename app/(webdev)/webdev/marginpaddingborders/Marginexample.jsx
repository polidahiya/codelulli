"use client";
import React, { useState } from "react";
import { Button, ControlGroup } from "@/app/_globalcomps/Buttonandbuttongroup";
import Codedisplay from "@/app/_globalcomps/Codedisplay";

function Marginexample() {
  const sizes = ["0px", "5px", "10px", "20px", "30px", "40px"];
  const [margin, setMargin] = useState("10px");

  return (
    <>
      <div className="bg-gray-200 h-48">
        <div style={{ margin }} className="inline-block bg-blue-500 p-5  text-white ">
          Margin Example
        </div>
      </div>
      <Codedisplay
        language="html"
        code={`<style>
            .box{
              margin: ${margin};
            }
</style>`}
      />
      <ControlGroup title="Margin">
        {sizes.map((size) => (
          <Button key={size} onClick={() => setMargin(size)}>
            {size}
          </Button>
        ))}
      </ControlGroup>
    </>
  );
}

export default Marginexample;
