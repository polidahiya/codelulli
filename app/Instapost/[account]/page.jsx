import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="max-w-2xl mx-auto text px-2">
      {/* Profile Card */}
      <div className="flex flex-col justify-center rounded-2xl shadow mt-5 bg-white dark:bg-gray-800 py-10">
        <div className="flex flex-col items-center">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRIWjfrZRnaHdqPNkspOxYCXZUUOwnNr5kvG95OM8ilogm37yR"
            alt=""
            className="w-20 aspect-square rounded-full shadow-md"
          />
          <p className="text-gray-800 dark:text-white font-semibold mt-2">
            Browalibaat
          </p>
        </div>
        <div className="px-10 text-xs text-gray-600 dark:text-gray-300 mt-4">
          ⭕ Have Fun😂
          <br /> .<br /> .<br /> .<br /> #Funny | #naughtymemes | #Awesome |
          #memes | #fyp
        </div>
      </div>

      {/* Posts List */}
      <div className="flex flex-col gap-5 mt-5">
        <Link
          href="/"
          className="flex justify-between items-center rounded-2xl shadow bg-white dark:bg-gray-900 p-2 !no-underline"
        >
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRIWjfrZRnaHdqPNkspOxYCXZUUOwnNr5kvG95OM8ilogm37yR"
            alt=""
            className="w-20 aspect-square rounded-lg border border-gray-300 dark:border-gray-700"
          />
          <div className="flex-1 px-5">
            <div className="text-xl text-gray-800 dark:text-white font-medium">
              Post - N 1
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-sm">
              Start 256
            </div>
          </div>
          <button className="shadow-sm rounded-full w-10 h-10 bg-red-600 text-white mr-5">
            &#10140;
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
