import React from "react";
import ClipPathPage from "./Clientpage";

function page() {
  return (
    <div>
      <ClipPathPage />
      <section className="px-4 md:px-10 py-10 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">
          CSS Clip-Path Polygon Shapes – Free Collection for Web Developers
        </h1>

        <p className="mb-4">
          Enhance your web designs with our curated collection of{" "}
          <strong>CSS clip-path shapes</strong> built using{" "}
          <strong>polygon()</strong>. These ready-to-use shapes can be applied
          to any element to create unique UI effects, animations, and modern
          layouts without using images or SVG files.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          What is clip-path in CSS?
        </h2>
        <p className="mb-4">
          The <code>clip-path</code> property allows you to define custom
          clipping regions to show only certain parts of an element. By using{" "}
          <strong>polygon()</strong> values, you can create complex geometric
          shapes with precise control.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Popular clip-path shapes:
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>Bevel</li>
          <li>Rabbet</li>
          <li>Left Arrow</li>
          <li>Right Arrow</li>
          <li>Chevron and Pointed Shapes</li>
          <li>Cross and Message Icons</li>
          <li>Frames and UI Containers</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How to use:</h2>
        <p className="mb-4">
          Copy any shape from the list and apply it to your element using:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          <code>
            .my-shape{" "}
            {
              "clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);"
            }
          </code>
        </pre>

        <p className="mt-4">
          Combine these with{" "}
          <strong>hover effects, transitions, and gradients</strong> for
          powerful UI animations.
        </p>
      </section>
    </div>
  );
}
export async function generateMetadata() {
  return {
    title:
      "CSS Clip-Path Shapes Collection – SVG Polygon Examples for Web Design",
    description:
      "Explore a powerful collection of clip-path shapes using CSS polygon coordinates, including arrows, chevrons, frames, and custom shapes. Perfect for enhancing modern UI design and animations.",
    keywords:
      "css clip-path, clip-path polygon, css shapes, clip-path examples, svg shapes css, css polygon generator, web design shapes, ui design clip-path, custom css shapes, polygon css examples",
  };
}

export default page;
