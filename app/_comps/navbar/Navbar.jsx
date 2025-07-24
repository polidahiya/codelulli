import React from "react";
import Themeswitchbutton from "./Themeswitchbutton";
import Link from "next/link";
import Menubutton from "./Menubutton";
import Navwrapper from "./Navwrapper";
import Verification from "@/app/Verifytoken";
import Image from "next/image";

async function Navbar() {
  const { usertype } = await Verification();
  const isadmin = usertype == "admin";

  return (
    <Navwrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full">
          <div className="flex items-center gap-2">
            <Menubutton />
            <Link href="/" className="flex items-center gap-1">
              <Image
                src={"/logo.png"}
                width={40}
                height={40}
                alt={"logo"}
                className="p-1"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Themeswitchbutton />
            {isadmin && (
              <>
                <Link
                  href="/Instapost/admin"
                  className="px-5 py-1 shadow-sm rounded-full dark:bg-zinc-500 dark:text-white mr-2"
                >
                  Insta Admin
                </Link>
                <Link
                  href="/Admin"
                  className="px-5 py-1 shadow-sm rounded-full dark:bg-zinc-500 dark:text-white"
                >
                  Admin
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </Navwrapper>
  );
}

export default Navbar;
