import React from "react";

function Keybutton({ text }) {
  return (
    <span className="h-10 px-5 inline-flex items-center justify-center  bg-gray-200 border border-gray-400 rounded-lg shadow-md text-gray-800 font-semibold ">
      {text}
    </span>
  );
}

export default Keybutton;
