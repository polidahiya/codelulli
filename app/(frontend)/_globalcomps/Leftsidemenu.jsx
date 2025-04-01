"use client";
import { webroutes } from "../webdata";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Leftsidemenu() {
  const path = usePathname();

  return (
    <div className="min-w-60  bg-bg1 p-2 space-y-2">
      {webroutes.map((item, i) => (
        <Link
          href={item}
          key={i}
          className={`block bg-background px-5 py-1 rounded-md border ${
            path == item ? "text-primary dark:text-white font-bold border border-primary dark:border-white":"dark:opacity-50"
          }`}
        >
          Lecture {i + 1}
        </Link>
      ))}
    </div>
  );
}

export default Leftsidemenu;
