import React from "react";
import Morepages from "./_comps/Morepages";

export default function layout({ children }) {
  return (
    <div>
      {children}
      <Morepages />
    </div>
  );
}
