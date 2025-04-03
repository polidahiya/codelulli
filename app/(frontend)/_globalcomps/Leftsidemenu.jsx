"use client";
import { webroutes } from "../webdata";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AppContextfn } from "@/app/Context";

function Leftsidemenu() {
  const path = usePathname();
  const { showleftmenu, setshowleftmenu } = AppContextfn();

  return (
    <div
      className={`fixed lg:sticky top-16 left-0 w-full lg:w-60 h-[calc(100dvh-64px)] min-w-60  bg-bg1 px-2 py-5 space-y-2 duration-300 lg:duration-0 overflow-y-scroll ${
        showleftmenu ? "-translate-x-0" : "-translate-x-full lg:-translate-x-0"
      }`}
    >
      {webroutes.map((item, i) => (
        <Link
          href={item}
          key={i}
          className={`block bg-background px-5 py-1 rounded-md border ${
            path == item
              ? "text-primary dark:text-white font-bold border border-primary dark:border-white"
              : "dark:opacity-50"
          }`}
          onClick={() => setshowleftmenu(false)}
        >
          Lecture {i + 1}
        </Link>
      ))}
    </div>
  );
}

export default Leftsidemenu;
