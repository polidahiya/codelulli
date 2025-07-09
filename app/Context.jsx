"use client";
import React, { useState } from "react";
import { useContext, createContext } from "react";
const AppContext = createContext({});

export function Context({ children }) {
  const [showleftmenu, setshowleftmenu] = useState(false);
  const showdialoginitialvalues = {
    show: false,
    title: "",
    continue: null,
    type: true,
  };
  const [showdialog, setshowdialog] = useState(showdialoginitialvalues);
  return (
    <AppContext.Provider
      value={{
        showleftmenu,
        setshowleftmenu,
        showdialoginitialvalues,
        showdialog,
        setshowdialog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function AppContextfn() {
  return useContext(AppContext);
}

export default Context;
