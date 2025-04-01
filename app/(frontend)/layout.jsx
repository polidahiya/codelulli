import React from "react";
import Navbar from "./_globalcomps/navbar/Navbar";
import Leftsidemenu from "./_globalcomps/Leftsidemenu";
import Footer from "./_globalcomps/footer/Footer";

async function layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="px-5 md:px-0 flex gap-5">
        <Leftsidemenu />
        <div className="w-full md:w-[calc(100%-520px)] pt-5"> {children}</div>
        <div className="min-w-60  bg-bg1"></div>
      </div>
      <Footer />
    </>
  );
}

export default layout;
