import React from "react";

function Mouseclick({ leftclick = true }) {
  return (
    <span className="relative inline-flex flex-col h-10 aspect-[3/4] bg-[#f5f5f5] dark:bg-[#333] shadow-[inset_-3px_0px_0px_#e6e6e6] dark:shadow-[inset_-3px_0px_0px_#222] border rounded-full text-gray-800 dark:text-gray-200 font-semibold overflow-hidden">
    <span className="absolute top-0 left-0 w-full h-2/5 flex border-b border-gray-400 dark:border-gray-600">
      <span className={`h-full w-full ${leftclick ? "bg-gray-600 dark:bg-gray-300" : "bg-transparent"}`}></span>
      <span className={`h-full w-full ${!leftclick ? "bg-gray-600 dark:bg-gray-300" : "bg-transparent"}`}></span>
    </span>
  </span>
  );
}

export default Mouseclick;
