"use client";
import React, { useState } from "react";
import { useContext, createContext } from "react";
const AppContext = createContext({});

export function Context({ children }) {
  const [showleftmenu, setshowleftmenu] = useState(false);
  return (
    <AppContext.Provider value={{ showleftmenu, setshowleftmenu }}>
      {children}
    </AppContext.Provider>
  );
}

export function AppContextfn() {
  return useContext(AppContext);
}

export default Context;
