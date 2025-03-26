import React from "react";
import Themeswitchbutton from "../../../_globalcomps/Themeswitchbutton";

function Navbar() {
  return (
    <nav className="sticky top-0 h-[50px] px-5 md:px-10 flex items-center bg-white dark:bg-black shadow-md z-40">
      <div className="ml-auto flex items-center justify-center cursor-pointer">
        <Themeswitchbutton />
      </div>
    </nav>
  );
}

export default Navbar;
