import React from "react";
import Marginexample from "./Marginexample";
import Paddingexample from "./Paddingexample";
import Borderexample from "./Borderexample";
import Image from "next/image";

function Page() {
  return (
    <div className=" text">
      <h1 className="text-2xl font-bold">Margin, Padding & Border</h1>
      <Image
        src="/webdev/marginpaddingboarder.webp"
        alt="margin-padding-border-comparison-image"
        height={300}
        width={400}
      />

      {/* Margin Example */}
      <div>
        <h2 className="mt-5">1. Margin</h2>
        <p>
          The <strong>margin</strong> property in CSS controls the space{" "}
          <strong>outside</strong> an element. It creates space between
          elements, helping with layout and positioning.
        </p>
        <h3>Margin Directions</h3>
        <ul>
          <li>
            <code>margin-top</code> → Space above an element.
          </li>
          <li>
            <code>margin-right</code> → Space to the right.
          </li>
          <li>
            <code>margin-bottom</code> → Space below.
          </li>
          <li>
            <code>margin-left</code> → Space to the left.
          </li>
        </ul>
        <h3>Shorthand Margin Properties</h3>
        <ul>
          <li>
            <code>margin: 10px;</code> → Adds <strong>10px space</strong> around
            all sides.
          </li>
          <li>
            <code>margin: 10px 20px;</code> → Adds{" "}
            <strong>10px top & bottom, 20px left & right</strong>.
          </li>
          <li>
            <code>margin: 10px 15px 20px 5px;</code> → Adds <strong>10px top</strong>,{" "}
            <strong>15px right</strong>, <strong>20px bottom</strong>, and{" "}
            <strong>5px left</strong>.
          </li>
          <li>
            <code>margin: auto;</code> → Centers the element horizontally (when width is set).
          </li>
        </ul>
        <p>
          <strong>Try Different Margins Below:</strong>
        </p>
        <Marginexample />
      </div>

      {/* Padding Example */}
      <div>
        <h2 className="mt-5">2. Padding</h2>
        <p>
          The <strong>padding</strong> property controls the space{" "}
          <strong>inside</strong> an element, between its content and its
          border. It increases the clickable/touchable area of elements like
          buttons.
        </p>
        <h3>Padding Directions</h3>
        <ul>
          <li>
            <code>padding-top</code> → Space inside the element, above the content.
          </li>
          <li>
            <code>padding-right</code> → Space inside the right edge.
          </li>
          <li>
            <code>padding-bottom</code> → Space inside the bottom edge.
          </li>
          <li>
            <code>padding-left</code> → Space inside the left edge.
          </li>
        </ul>
        <h3>Shorthand Padding Properties</h3>
        <ul>
          <li>
            <code>padding: 10px;</code> → Adds <strong>10px space</strong> on all sides.
          </li>
          <li>
            <code>padding: 5px 15px;</code> → Adds{" "}
            <strong>5px top & bottom, 15px left & right</strong>.
          </li>
          <li>
            <code>padding: 5px 10px 15px 20px;</code> → Adds <strong>5px top</strong>,{" "}
            <strong>10px right</strong>, <strong>15px bottom</strong>, and{" "}
            <strong>20px left</strong>.
          </li>
          <li>
            <code>padding: 0;</code> → Removes all padding.
          </li>
        </ul>
        <p>
          <strong>Try Different Padding Below:</strong>
        </p>
        <Paddingexample />
      </div>

      {/* Border Example */}
      <div>
        <h2 className="mt-5">3. Border</h2>
        <p>
          The <strong>border</strong> property creates a visible boundary around
          an element. It has three key properties:
        </p>
        <ul>
          <li>
            <strong>border-width</strong> → Thickness of the border (
            <code>1px, 5px, etc.</code>).
          </li>
          <li>
            <strong>border-style</strong> → Style of the border (
            <code>solid, dashed, dotted, etc.</code>).
          </li>
          <li>
            <strong>border-color</strong> → Color of the border (
            <code>red, blue, etc.</code>).
          </li>
        </ul>
        <p>Example:</p>
        <pre>
          <code>border: 2px solid black;</code>
        </pre>
        <p>
          This creates a <strong>2px black solid border</strong>.
        </p>
        <p>
          <strong>Try Different Borders Below:</strong>
        </p>

        <Borderexample />
      </div>
    </div>
  );
}

export default Page;
