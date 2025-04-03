"use client";
import React from "react";
import { IoCopy } from "react-icons/io5";
import copytoclipboard from "@/app/Helperfunctions/copytoclipboard";

function Copybutton({ text }) {
  return (
    <td
      className="border p-2 cursor-pointer group hover:text-primary"
      onClick={() => copytoclipboard(text)}
    >
      {text}{" "}
      <IoCopy className="inline-block text-slate-300 group-hover:text-primary" />
    </td>
  );
}

export default Copybutton;
