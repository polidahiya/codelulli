import React from "react";

function Mouseclick({ leftclick = true }) {
  return (
    <span className="relative inline-flex  flex-col h-10 aspect-[3/4]  bg-gray-200 border border-gray-400 rounded-full shadow-md text-gray-800 font-semibold overflow-hidden">
      <span className="absolute top-0 left-0 w-full h-2/5 flex border-b border-gray-400">
        <span className={`h-full w-full ${leftclick && "bg-gray-600"}`}></span>
        <span className={`h-full w-full ${!leftclick && "bg-gray-600"}`}></span>
      </span>
    </span>
  );
}

export default Mouseclick;
