"use client";
import React from "react";

function Backbutton({ children, className }) {
  return (
    <button className={className} onClick={() => window.history.back()}>
      {children}
    </button>
  );
}

export default Backbutton;
