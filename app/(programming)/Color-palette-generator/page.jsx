import React from "react";
import ColorPaletteGenerator from "./Clientcomp";

function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-10">
      <ColorPaletteGenerator />
      <p className="max-w-3xl text-center text-gray-600 dark:text-gray-300 mb-6 mx-auto">
        Easily generate beautiful color palettes with this free online tool.
        Whether you're a web designer, frontend developer, or creative artist,
        this generator helps you discover perfect color combinations for your
        projects. Choose how many colors you need, copy hex codes with a click,
        and explore previously generated palettes for inspiration. Fast, simple,
        and mobile-friendly!
      </p>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title:
      "Color Palette Generator Online – Create Beautiful Color Schemes Instantly",
    description:
      "Generate stunning color palettes instantly with our free online color palette generator. Perfect for web designers, developers, and creatives. Customize number of colors and copy hex codes with one click!",
    keywords:
      "color palette generator, hex color generator, color scheme generator, web design colors, random color palette, color picker tool, color combination tool, palette generator online, UI color inspiration, generate color codes",
  };
}

export default page;
