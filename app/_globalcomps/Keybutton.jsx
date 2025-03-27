// import React from "react";

// function Keybutton({ text }) {
//   return (
//     <span className="h-10 px-5 inline-flex items-center justify-center  bg-gray-200 border border-gray-400 rounded-lg shadow-md text-gray-800 font-semibold ">
//       {text}
//     </span>
//   );
// }

// export default Keybutton;

import React from "react";

function Keybutton({ text }) {
  return (
    <div className="inline-flex justify-center items-center gap-12">
      <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-1 rounded-2xl dark:from-stone-700/40">
        <button className="group p-1 rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995] dark:from-stone-800 dark:to-stone-700">
          <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2 dark:from-stone-700 dark:to-stone-800">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-stone-900 dark:text-stone-100 px-3">
                {text}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Keybutton;
