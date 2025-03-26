import React from "react";
import Keybutton from "@/app/_globalcomps/Keybutton";
import Codedisplay from "@/app/_globalcomps/Codedisplay";
import Link from "next/link";
import Csspropertiesexample from "./Csspropertiesexample";

function Page() {
  return (
    <div className="text">
      <h1>Let{"'"}s Understand HTML and CSS</h1>
      <p>
        In web development, every element on a webpage is essentially a box,
        thanks to the CSS Box Model. Whether it{"'"}s text, images, buttons, or
        entire sections, each element is enclosed in an invisible rectangular
        box that defines its size, spacing, and position.
      </p>
      <p>
        Visit your favorite website and press <Keybutton text={"Ctrl"} /> +{" "}
        <Keybutton text={"Shift"} /> + <Keybutton text={"C"} />. Then, move your
        mouse around the webpage. You{"'"}ll see the box model in action.
      </p>
      <strong>See? Everything is a box—pretty interesting, right?</strong>
      <h2 className="mt-5">So, How Do We Create These Boxes?</h2>
      <p>
        To create these boxes on a website, we use HTML and CSS. In HTML, we
        define elements like {"<div>"}, {"<span>"}, and {"<section>"}.
      </p>
      <p>
        Simply use a <mark>div</mark> tag like this: {"<div>"} {"</div>"}, and
        add any text inside it.
      </p>

      <Codedisplay
        language="html"
        code={`<body>
  <div>Your text here</div>
</body>`}
      />
      <p>You can add as many as you like.</p>
      <Codedisplay
        language="html"
        code={`<body>
  <div>Your text here</div>
  <div>Your Age</div>
  <div>Bla bla</div>
</body>`}
      />
      <p>
        There are many tags in HTML.{" "}
        <Link href={"/webdev/htmltags"}>View them here</Link>. Take a look, but
        don’t try to memorize them just yet.
      </p>
      <h2>Let’s Do Something Fun!</h2>
      <p>How can we change the color of the text?</p>
      <p>Step 1: Add a style tag inside the head tag.</p>
      <Codedisplay
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text Color</title>
    <style>
    </style>
</head>
<body>
    <div>This text will be blue.</div>
</body>
</html>`}
      />
      <p>
        Step 2: Select the tag {"("}box{")"} you want to style and add as many
        properties as you’d like. To change the color, use the {"("}color{")"}{" "}
        property and set its value to {"("}blue{")"}.
      </p>
      <Codedisplay
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text Color</title>
    <style>
        div {
            color: blue;
            /* Add more properties here */
        }
    </style>
</head>
<body>
    <div>This text will be blue.</div>
</body>
</html>`}
      />
      <h4>Output</h4>
      <p className="text-[blue]">This text will be blue.</p>
      <h3>More Properties to Explore</h3>
      <Csspropertiesexample />
      <h2 className="mt-5">Classes</h2>
      <p>
        What if we have two separate {"<div>"} elements and want to change their
        colors differently?
      </p>
      <Codedisplay
        language="html"
        code={`
    <style>
        div {
            color: blue;
            /* Add more properties here */
        }
    </style>
    <div>First box (want it blue)</div>
    <div>Second box (want it red)</div>
    `}
      />
      <h4>Output</h4>
      <p className="text-[blue] !mb-0">
        First box {"("}want it blue{")"}
      </p>
      <p className="text-[blue]">
        Second box {"("}want it red{")"}
      </p>
      <p>
        We want them to have different colors, but they’re both blue. To fix
        this, we need to differentiate them by assigning class names.
      </p>
      <h3>How to Assign Class Names</h3>
      <Codedisplay
        language="html"
        code={`
    <style>
      .box1 {
          color: blue;
          /* Add more properties here */
      }
      .box2 {
          color: red;
          /* Add more properties here */
      }
    </style>
    <div class="box1">First box (want it blue)</div>
    <div class="box2">Second box (want it red)</div>
    `}
      />
      <h4>Output</h4>
      <p className="text-[blue] !mb-0">
        First box {"("}want it blue{")"}
      </p>
      <p className="text-[red]">
        Second box {"("}want it red{")"}
      </p>
      <p>
        You can checkout more css properties if you want to{" "}
        <Link href={"/webdev/csspropertiestable"}>Check</Link>, again do not try to
        learn them.
      </p>
      <h2>Test Project</h2>
      <p>Try creating a webpage that looks like this:</p>
      <div className="bg-blue-100">
        <p className="text-gray-600">Din hua hai to raat bhi hogi,</p>
        <p className="text-yellow-900">Ho mat udaas, kabhi to baat bhi hogi.</p>
        <p className="text-green-600">Itne pyar se dosti ki hai,</p>
        <p className="text-red-500">Zindagi rahi to mulaqat bhi hogi.</p>
      </div>
    </div>
  );
}

export default Page;
