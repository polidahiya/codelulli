"use client";
import React, { useState } from "react";
import copytoclipboard from "@/app/Helperfunctions/copytoclipboard";
import { IoCopy } from "react-icons/io5";

function Gridview({ charsets }) {
  const [selectedCategory, setSelectedCategory] = useState("basic");
  const [selectedItem, setSelectedItem] = useState(null); // Store the full item object

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Categories */}
      <div className="mb-4 flex flex-wrap gap-2">
        {Object.entries(charsets).map(([category, item]) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
              selectedCategory === category
                ? "bg-primary text-white dark:bg-primary-700 dark:text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <span
              className={`h-full aspect-square rounded-full inline-flex items-center justify-center ${
                selectedCategory === category
                  ? "bg-white text-primary dark:bg-gray-800 dark:text-primary-700"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              {item[0].character || item[0]?.emoji}
            </span>
            <span className="inline-block">{category.replace(/_/g, " ")}</span>
            {/* Replace underscores with spaces for readability */}
          </button>
        ))}
      </div>

      {/* Selected Item Output */}
      {selectedItem && (
        <div className="mb-4 p-4 bg-gray-100 rounded-md shadow dark:bg-gray-800 dark:shadow-dark">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Selected Item
          </h3>
          <div className="mt-2">
            <p
              className="flex items-center gap-3 cursor-pointer group hover:text-primary dark:hover:text-primary-700 w-fit"
              onClick={() =>
                copytoclipboard(selectedItem.character || selectedItem.emoji)
              }
            >
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Character/Emoji:
              </span>{" "}
              <span className="text-2xl text-gray-900 dark:text-gray-100">
                {selectedItem.character || selectedItem.emoji}
              </span>
              <IoCopy className="inline-block text-slate-300 group-hover:text-primary dark:text-gray-500 dark:group-hover:text-primary-700" />
            </p>
            <p
              className="flex items-center gap-3 cursor-pointer group hover:text-primary dark:hover:text-primary-700 w-fit"
              onClick={() => copytoclipboard(selectedItem.description)}
            >
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Description:
              </span>{" "}
              <span className="text-gray-900 dark:text-gray-100">
                {selectedItem.description}
              </span>
              <IoCopy className="inline-block text-slate-300 group-hover:text-primary dark:text-gray-500 dark:group-hover:text-primary-700" />
            </p>
            <p
              className="flex items-center gap-3 cursor-pointer group hover:text-primary dark:hover:text-primary-700 w-fit"
              onClick={() => copytoclipboard(selectedItem.html_entity)}
            >
              <span className="font-medium text-gray-700 dark:text-gray-300">
                HTML Entity:
              </span>{" "}
              <span className="text-gray-900 dark:text-gray-100">
                {selectedItem.html_entity}
              </span>
              <IoCopy className="inline-block text-slate-300 group-hover:text-primary dark:text-gray-500 dark:group-hover:text-primary-700" />
            </p>
            <p
              className="flex items-center gap-3 cursor-pointer group hover:text-primary dark:hover:text-primary-700 w-fit"
              onClick={() => copytoclipboard(selectedItem.numeric_code)}
            >
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Numeric Code:
              </span>{" "}
              <span className="text-gray-900 dark:text-gray-100">
                {selectedItem.numeric_code}
              </span>
              <IoCopy className="inline-block text-slate-300 group-hover:text-primary dark:text-gray-500 dark:group-hover:text-primary-700" />
            </p>
            {selectedItem.unicode && (
              <p
                className="flex items-center gap-3 cursor-pointer group hover:text-primary dark:hover:text-primary-700 w-fit"
                onClick={() => copytoclipboard(selectedItem.unicode)}
              >
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Unicode:
                </span>{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedItem.unicode}
                </span>
                <IoCopy className="inline-block text-slate-300 group-hover:text-primary dark:text-gray-500 dark:group-hover:text-primary-700" />
              </p>
            )}
          </div>
        </div>
      )}

      {/* Items Grid */}
      <div className="flex items-center justify-start gap-2 flex-wrap">
        {charsets[selectedCategory].map((item, i) => (
          <button
            key={i}
            className={`w-12 h-12 flex items-center justify-center text-lg rounded-md transition-colors ${
              (item.character || item.emoji) ===
              (selectedItem?.character || selectedItem?.emoji)
                ? "bg-primary-100 border-2 border-primary dark:bg-primary-900 dark:border-primary-700"
                : "bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
            }`}
            onClick={() => setSelectedItem(item)} // Set the full item object
          >
            {item.character || item.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gridview;