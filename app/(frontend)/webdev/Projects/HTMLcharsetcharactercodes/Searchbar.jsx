"use client";
import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";
import copytoclipboard from "@/app/Helperfunctions/copytoclipboard";

function Searchbar({ charsets }) {
  const allCharacters = Object.values(charsets).flat();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Filter characters based on search term across multiple fields
  const filteredCharacters = allCharacters.filter((item) => {
    const searchLower = searchTerm?.toLowerCase();
    return (
      (item?.character &&
        item?.character?.toLowerCase().includes(searchLower)) ||
      (item?.emoji && item?.emoji?.toLowerCase().includes(searchLower)) ||
      item?.description?.toLowerCase().includes(searchLower) ||
      item?.html_entity?.toLowerCase().includes(searchLower) ||
      item?.numeric_code?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="w-full mx-auto relative">
      {/* Input field */}
      <input
        type="text"
        placeholder="Search by character, description, entity, or code..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-primary-700"
      />

      {/* Dropdown */}
      {isOpen && filteredCharacters.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-dark">
          {filteredCharacters.map((item, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer flex flex-col space-y-1 border-b border-gray-200 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            >
              {/* Display character or emoji */}
              <div className="flex items-center space-x-2">
                <span className="text-lg">
                  {item?.character || item?.emoji}
                </span>
                <span className="font-medium">{item?.description}</span>
              </div>
              {/* HTML Entity and Numeric Code */}
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Entity:{" "}
                <button
                  className="p-2 cursor-pointer group hover:text-primary"
                  onClick={() => copytoclipboard(item?.html_entity)}
                >
                  {item?.html_entity}{" "}
                  <IoCopy className="inline-block text-slate-300 group-hover:text-primary" />
                </button>{" "}
                | Code:{" "}
                <button
                  className="p-2 cursor-pointer group hover:text-primary"
                  onClick={() => copytoclipboard(item?.numeric_code)}
                >
                  {item?.numeric_code}{" "}
                  <IoCopy className="inline-block text-slate-300 group-hover:text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results message */}
      {isOpen && searchTerm && filteredCharacters.length === 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-2 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
          No results found
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default Searchbar;
