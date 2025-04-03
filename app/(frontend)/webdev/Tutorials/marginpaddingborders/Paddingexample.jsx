"use client";
import React, { useState } from "react";
import { Button, ControlGroup } from "@/app/(frontend)/_globalcomps/Buttonandbuttongroup";
import Codedisplay from "@/app/(frontend)/_globalcomps/Codedisplay";

function Paddingexample() {
  const sizes = ["0px", "5px", "10px", "20px", "30px", "40px"];
  const [padding, setPadding] = useState("10px");

  return (
    <>
      <div className="bg-gray-200 p-4 flex justify-center">
        <div style={{ padding }} className="bg-green-500 text-white">
          Padding Example
        </div>
      </div>
      <Codedisplay
        language="html"
        code={`<style>
            .box{
              padding: ${padding};
            }
</style>`}
      />
      <ControlGroup title="Padding">
        {sizes.map((size) => (
          <Button key={size} onClick={() => setPadding(size)}>
            {size}
          </Button>
        ))}
      </ControlGroup>
    </>
  );
}

export default Paddingexample;
