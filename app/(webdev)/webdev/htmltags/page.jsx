import React from "react";
import Codedisplay from "@/app/_globalcomps/Codedisplay";
import Backbutton from "@/app/_globalcomps/Backbutton";

function page() {
  return (
    <div className="relative">
      <div className="fixed top-16 left-10 border rounded-md z-20 bg-background">
        <Backbutton className={"px-5 py-1"}>Back</Backbutton>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center mt-10">
        HTML Tags List
      </h2>
      {htmlTags.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-center">
            {category.category}
          </h3>
          <div className="list-disc">
            {category.tags.map((tag, idx) => (
              <li key={idx} className="mb-2">
                <strong>{tag.tag}:</strong> {tag.description}
                <Codedisplay language="html" code={tag.example} />
                <p>Preview</p>
                <div
                  className="p-3 border rounded mt-2"
                  dangerouslySetInnerHTML={{ __html: tag.example }}
                />
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
const htmlTags = [
  {
    category: "Basic Structure Tags",
    tags: [
      {
        tag: "<html>",
        description: "Defines the root of an HTML document",
        example: `<html lang="en">...</html>`,
      },
      {
        tag: "<head>",
        description: "Contains metadata and links",
        example: `<head><title>My Page</title></head>`,
      },
      {
        tag: "<title>",
        description: "Sets the title of the webpage",
        example: `<title>My Awesome Website</title>`,
      },
      {
        tag: "<body>",
        description: "Contains the visible content",
        example: `<body><h1>Welcome!</h1></body>`,
      },
    ],
  },
  {
    category: "Text Formatting Tags",
    tags: [
      {
        tag: "<h1> to <h6>",
        description:
          "Defines headings, <h1> is the largest, <h6> is the smallest",
        example: `<h1>Main Title</h1><h2>Sub Title</h2>`,
      },
      {
        tag: "<p>",
        description: "Defines a paragraph",
        example: `<p>This is a paragraph.</p>`,
      },
      {
        tag: "<b>",
        description: "Makes text bold",
        example: `<b>Bold Text</b>`,
      },
      {
        tag: "<i>",
        description: "Makes text italic",
        example: `<i>Italic Text</i>`,
      },
      {
        tag: "<u>",
        description: "Underlines text",
        example: `<u>Underlined Text</u>`,
      },
    ],
  },
  {
    category: "Layout & Sectioning Tags",
    tags: [
      {
        tag: "<div>",
        description: "A block-level container",
        example: `<div class="container">Content here</div>`,
      },
      {
        tag: "<section>",
        description: "Defines a section in a document",
        example: `<section><h2>About Us</h2></section>`,
      },
      {
        tag: "<article>",
        description: "Defines an article or independent content",
        example: `<article><h3>News Article</h3><p>Details...</p></article>`,
      },
      {
        tag: "<header>",
        description: "Represents the header of a section",
        example: `<header><h1>Website Title</h1></header>`,
      },
      {
        tag: "<footer>",
        description: "Represents the footer of a section",
        example: `<footer>&copy; 2025 MyWebsite</footer>`,
      },
    ],
  },
  {
    category: "List Tags",
    tags: [
      {
        tag: "<ul>",
        description: "Creates an unordered list",
        example: `<ul><li>Item 1</li><li>Item 2</li></ul>`,
      },
      {
        tag: "<ol>",
        description: "Creates an ordered list",
        example: `<ol><li>First</li><li>Second</li></ol>`,
      },
      {
        tag: "<li>",
        description: "Defines a list item inside <ul> or <ol>",
        example: `<li>List Item</li>`,
      },
    ],
  },
  {
    category: "Table Tags",
    tags: [
      {
        tag: "<table>",
        description: "Defines a table",
        example: `<table><tr><th>Name</th><td>John</td></tr></table>`,
      },
      {
        tag: "<tr>",
        description: "Defines a table row",
        example: `<tr><td>Row Data</td></tr>`,
      },
      {
        tag: "<td>",
        description: "Defines a table cell",
        example: `<td>Data</td>`,
      },
      {
        tag: "<th>",
        description: "Defines a table header",
        example: `<th>Header</th>`,
      },
    ],
  },
  {
    category: "Form Tags",
    tags: [
      {
        tag: "<form>",
        description: "Defines an HTML form",
        example: `<form><input type="text" /></form>`,
      },
      {
        tag: "<input>",
        description: "Defines an input field",
        example: `<input type="text" placeholder="Enter your name"/>`,
      },
      {
        tag: "<button>",
        description: "Creates a button",
        example: `<button>Click Me</button>`,
      },
    ],
  },
  {
    category: "Media Tags",
    tags: [
      {
        tag: "<img>",
        description: "Embeds an image",
        example: `<img src="https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" alt="Example Image" />`,
      },
      {
        tag: "<audio>",
        description: "Embeds an audio player",
        example: `<audio controls><source src="audio.mp3" /></audio>`,
      },
      {
        tag: "<video>",
        description: "Embeds a video player",
        example: `<video controls><source src="video.mp4" /></video>`,
      },
    ],
  },
  {
    category: "Linking & Interactive Tags",
    tags: [
      {
        tag: "<a>",
        description: "Defines a hyperlink",
        example: `<a href="https://example.com">Click Here</a>`,
      },
      {
        tag: "<details>",
        description: "Creates an expandable details section",
        example: `<details><summary>More Info</summary><p>Details here</p></details>`,
      },
    ],
  },
];

export default page;
