"use client";
import React, { useState } from "react";
import Learn from "./Learn";
import Read from "./Read";
import Test from "./Test";

function Clientcomp({ data, qline, title, listname }) {
  const Optionlist = [
    {
      title: "Read",
      comp: <Read data={data} Title={title} />,
    },
    { title: "Learn", comp: <Learn data={data} qline={qline} listname={listname}/> },
    { title: "Test", comp: <Test data={data} qline={qline} /> },
  ];
  const [mode, setMode] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center justify-center mt-10">
        {Optionlist.map((item, i) => (
          <button
            key={i}
            className={`
        px-5 py-2.5 rounded-full border 
        transition duration-200 text-sm font-medium
        ${
          mode === i
            ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500"
            : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        }
      `}
            onClick={() => setMode(i)}
          >
            {item?.title}
          </button>
        ))}
      </div>
      {Optionlist[mode]?.comp}
    </div>
  );
}

export default Clientcomp;
