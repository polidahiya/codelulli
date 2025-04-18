import React from "react";
import Themeswitchbutton from "../Themeswitchbutton";
import Link from "next/link";
import Menubutton from "./Menubutton";
import Navwrapper from "./Navwrapper";

function Navbar() {
  return (
    <>
      <Navwrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full">
            <div className="flex items-center gap-2">
              <Menubutton />
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary">Codelulli</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Themeswitchbutton />
              <Link
                href="/tutorials"
                className=" hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Tutorials
              </Link>
              <Link
                href="/about"
                className=" hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/webdev/firstwebpage"
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Navwrapper>
    </>
  );
}

export default Navbar;
