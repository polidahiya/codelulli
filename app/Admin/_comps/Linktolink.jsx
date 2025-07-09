"use client";
import React, { useState } from "react";
import Copybutton from "../Copybutton";

function Linktolink() {
  const [inputLink, setInputLink] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const url = new URL(inputLink); // Validate input
      const cleanLink = url.hostname + url.pathname + url.search;
      const encoded = encodeURIComponent(cleanLink);
      setGeneratedLink(`https://codelulli.vercel.app/L?L=${encoded}`);
    } catch {
      setGeneratedLink("Invalid URL");
    }
  };

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter a link (e.g. https://google.com)"
          value={inputLink}
          onChange={(e) => setInputLink(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded whitespace-nowrap"
        >
          Generate Link
        </button>
      </form>

      {generatedLink && (
        <div className="mt-4">
          <p>Generated Link:</p>
          <a
            href={generatedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all"
          >
            {generatedLink}
          </a>
          <span className="ml-2"><Copybutton link={generatedLink} /></span>
        </div>
      )}
    </div>
  );
}

export default Linktolink;
