"use client";
import React, { useState } from "react";

function Searchbar({ charsets }) {
  const allCharacters = Object.values(charsets).flat();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Filter characters based on search term across multiple fields
  const filteredCharacters = allCharacters.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (item.character && item.character.toLowerCase().includes(searchLower)) ||
      (item.emoji && item.emoji.toLowerCase().includes(searchLower)) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.html_entity.toLowerCase().includes(searchLower) ||
      item.numeric_code.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="w-full mx-auto sticky top-20">
      {/* Input field */}
      <input
        type="text"
        placeholder="Search by character, description, entity, or code..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Dropdown */}
      {isOpen && filteredCharacters.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredCharacters.map((item, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer flex flex-col space-y-1 border-b"
              onClick={() => {
                setSearchTerm(item.description);
                setIsOpen(false);
              }}
            >
              {/* Display character or emoji */}
              <div className="flex items-center space-x-2">
                <span className="text-lg">{item.character || item.emoji}</span>
                <span className="font-medium">{item.description}</span>
              </div>
              {/* HTML Entity and Numeric Code */}
              <div className="text-sm text-gray-600">
                <span>Entity: {item.html_entity} | Code: {item.numeric_code}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results message */}
      {isOpen && searchTerm && filteredCharacters.length === 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-2 text-gray-500">
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