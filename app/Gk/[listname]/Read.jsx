"use client";
import React from "react";
import Ads from "@/app/_comps/ads/Ads";

function Read({ data, title }) {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          {title}
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-md">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">
                  Field
                </th>
                <th className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([key, value]) => (
                <tr key={key} className="even:bg-gray-50 dark:even:bg-gray-900">
                  <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium capitalize">
                    {key}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 break-all">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Ads type={2} />
    </>
  );
}

export default Read;
