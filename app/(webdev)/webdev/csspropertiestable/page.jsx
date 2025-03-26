import React from "react";
import Backbutton from "@/app/_globalcomps/Backbutton";

function page() {
  const cssProperties = [
    {
      property: "color",
      valueType: "color",
      example: "red, #ff0000, rgb(255,0,0)",
    },
    {
      property: "background-color",
      valueType: "color",
      example: "blue, #0000ff, rgba(0,0,255,0.5)",
    },
    {
      property: "width",
      valueType: "length/percentage",
      example: "100px, 50%, 10em",
    },
    {
      property: "height",
      valueType: "length/percentage",
      example: "200px, 75%, 20rem",
    },
    {
      property: "margin",
      valueType: "length/percentage",
      example: "10px, 5%, auto",
    },
    {
      property: "padding",
      valueType: "length/percentage",
      example: "15px, 2em, 10%",
    },
    {
      property: "font-size",
      valueType: "length/percentage",
      example: "16px, 1em, 100%",
    },
    {
      property: "font-weight",
      valueType: "number/keyword",
      example: "400, bold, normal",
    },
    {
      property: "display",
      valueType: "keyword",
      example: "block, inline, flex",
    },
    {
      property: "position",
      valueType: "keyword",
      example: "relative, absolute, fixed",
    },
    {
      property: "top",
      valueType: "length/percentage",
      example: "10px, 5%, auto",
    },
    {
      property: "left",
      valueType: "length/percentage",
      example: "20px, 10%, auto",
    },
    {
      property: "border",
      valueType: "width style color",
      example: "1px solid black",
    },
    {
      property: "border-radius",
      valueType: "length/percentage",
      example: "5px, 50%, 2em",
    },
    { property: "opacity", valueType: "number", example: "0.5, 1, 0" },
    { property: "z-index", valueType: "integer", example: "1, 10, -1" },
    {
      property: "flex",
      valueType: "number/keyword",
      example: "1, auto, 0 1 200px",
    },
    {
      property: "transition",
      valueType: "property duration timing",
      example: "all 0.3s ease",
    },
    {
      property: "transform",
      valueType: "function",
      example: "rotate(45deg), scale(1.5)",
    },
    {
      property: "cursor",
      valueType: "keyword",
      example: "pointer, default, not-allowed",
    },
  ];

  return (
    <div className="text">
      <div className="fixed top-16 left-10 border rounded-md z-20 bg-background">
        <Backbutton className={"px-5 py-1"}>Back</Backbutton>
      </div>
      <h1 className="text-center mt-10">CSS Properties Reference</h1>

      <p>These are the most used properties in css.</p>
      <table className="">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value Type</th>
            <th>Example Values</th>
          </tr>
        </thead>
        <tbody>
          {cssProperties.map((prop, index) => (
            <tr key={index}>
              <td>{prop.property}</td>
              <td>{prop.valueType}</td>
              <td>{prop.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
