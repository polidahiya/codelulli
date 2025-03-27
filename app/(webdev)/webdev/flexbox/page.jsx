import React from "react";
import Codedisplay from "@/app/_globalcomps/Codedisplay";
import Flexboxexample from "./Flexboxexample";

function Page() {
  return (
    <div className="text">
      <h1>What is Flexbox?</h1>
      <p>
        Flexbox (Flexible Box Layout) is a CSS layout model designed to create 
        responsive and efficient layouts by dynamically distributing space 
        within a container. It allows elements to align properly, even when 
        their sizes are unknown or change dynamically.
      </p>
      <p>
        You can use Flexbox to arrange elements side by side, such as placing 
        one box on the left and another on the right.
      </p>
      <h3>Example:</h3>
      <div className="flex text-white">
        <div className="flex-1 bg-pink-600 h-48">Box 1</div>
        <div className="flex-1 bg-green-600 h-48">Box 2</div>
      </div>
      <p>
        Let's say you have two boxes, <mark>Box 1</mark> and <mark>Box 2</mark>, 
        and you want them to appear side by side.
      </p>
      <p>
        To achieve this, you need to use the <mark>flex</mark> class. This setup 
        consists of three elements: 
      </p>
      <ul>
        <li>
          A parent <mark>div</mark> with the <mark>flex</mark> class.
        </li>
        <li>
          Two child <mark>div</mark> elements inside the parent container.
        </li>
      </ul>
      <Codedisplay
        language="html"
        code={`<style>
      .parent {
        display: flex;
      }
      .box1 {
        background: pink;
        height: 200px;
      }
      .box2 {
        background: green;
        height: 200px;
      }
</style>
<div class="parent">
    <div class="box1">Box 1</div>
    <div class="box2">Box 2</div>
</div>`}
      />
      <div className="mt-5">
        <h2>Important Flexbox Properties:</h2>
        <ul>
          <li>
            <strong>flex-direction:</strong> Defines the direction of items 
            (<code>row</code>, <code>column</code>, etc.).
          </li>
          <li>
            <strong>justify-content:</strong> Aligns items along the main axis 
            (<code>center</code>, <code>space-between</code>, etc.).
          </li>
          <li>
            <strong>align-items:</strong> Aligns items along the cross-axis 
            (<code>flex-start</code>, <code>center</code>, etc.).
          </li>
          <li>
            <strong>flex-wrap:</strong> Controls whether items wrap to the next 
            line when needed.
          </li>
          <li>
            <strong>gap:</strong> Adds space between flex items without using 
            margins.
          </li>
        </ul>
      </div>
      <Flexboxexample />
    </div>
  );
}

export default Page;
