import React from "react";
import Navbar from "./_globalcomps/navbar/Navbar";
import { webroutes } from "./webdata";
import Link from "next/link";

async function layout({children}) {
  return (
    <>
      <Navbar />
      <div className="px-5 md:px-0 flex gap-5">
        <div className="min-w-60  bg-bg1 p-2 space-y-2">
          {webroutes.map((item, i) => (
            <Link
              href={item}
              key={i}
              className="block bg-background px-5 py-1 rounded-md border"
            >
              Lecture {i + 1}
            </Link>
          ))}
        </div>
        <div className="flex-1"> {children}</div>
        <div className="min-w-60  bg-bg1"></div>
      </div>
    </>
  );
}

export default layout;
