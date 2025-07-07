"use client";
import React from "react";
import copytoclipboard from "../_comps/helperfuns/Copytoclipiboard";

function Copybutton({ link }) {
  return (
    <button
      onClick={() => {
        copytoclipboard(link);
      }}
      className="border bg-green-500 text-white rounded-md px-2 py-1"
    >
      Copy
    </button>
  );
}

export default Copybutton;
