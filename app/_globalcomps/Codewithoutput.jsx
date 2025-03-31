import React from "react";
import Codedisplay from "./Codedisplay";

function Codewithoutput({
  children,
  code,
  language = "javascript",
  isDarkMode = true,
}) {
  return (
    <div className={`flex gap-2 flex-col md:flex-row`}>
      <Codedisplay code={code} language={language} isDarkMode={isDarkMode} />
      <div className="flex-1 flex flex-col border dark:border-none dark:bg-[#1e1e1e] rounded-md overflow-hidden">
        <div className="bg-bg1 dark:bg-[#313131] py-2 text-center">Output</div>
        {children}
      </div>
    </div>
  );
}

export default Codewithoutput;
