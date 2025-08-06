import React from "react";
import { metadata } from "./[listname]/Data";
import Link from "next/link";
function page() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Object.entries(metadata).map(([key, value]) => (
          <Link
            href={`/Gk/${key}`}
            key={key}
            className="block p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 text-center">
              {value?.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
