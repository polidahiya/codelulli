"use client";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AppContextfn } from "@/app/Context";

function Menubutton() {
  const { showleftmenu, setshowleftmenu } = AppContextfn();
  return (
    <button
      className="hidden h-full aspect-square items-center justify-center"
      onClick={() => setshowleftmenu((pre) => !pre)}
    >
      <HiOutlineMenu />
    </button>
  );
}

export default Menubutton;
