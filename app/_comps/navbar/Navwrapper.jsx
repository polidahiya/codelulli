"use client";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "@/app/Context";

function Navwrapper({ children }) {
  const { showleftmenu } = AppContextfn();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white h-16 sticky top-0 dark:bg-background z-40 transition-shadow duration-300 ${
        isScrolled && !showleftmenu && "shadow-md"
      }`}
    >
      {children}
    </nav>
  );
}

export default Navwrapper;
