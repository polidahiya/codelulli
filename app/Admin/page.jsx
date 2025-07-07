import React from "react";
import { getcollection } from "../Mongodb";
import Copybutton from "./Copybutton";
import Link from "next/link";

export default async function Page({ searchParams }) {
  const { search = "", page = 1 } = await searchParams;
  const itemsPerPage = 20;

  const { Linkscollection } = await getcollection();

  const query = search
    ? {
        $or: [
          { seotitle: { $regex: search, $options: "i" } },
          { seokeywords: { $regex: search, $options: "i" } },
        ],
      }
    : {};

  const totalItems = await Linkscollection.countDocuments(query);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const data = await Linkscollection.find(query)
    .skip((page - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .toArray();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 px-4 md:px-10">
      <form className="mb-4 flex flex-wrap gap-2">
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search SEO title or keyword..."
          className="w-full md:w-1/2 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((item, i) => {
          const ourlink = `https://codelulli.vercel.app/C/${item?.linknumber}`;
          return (
            <div
              key={i}
              className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {item?.seotitle || "Untitled"}
              </h2>
              {item?.link && (
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  Link to:{" "}
                  <Link
                    href={item?.link}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    {item?.link}
                  </Link>
                </p>
              )}

              <p className="mb-2 text-gray-700 dark:text-gray-300">
                link:{" "}
                <Link
                  href={ourlink}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  {ourlink}
                </Link>
                <span className="pl-2">
                  <Copybutton link={ourlink} />
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(item?.timestamp).toLocaleString()}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/Admin/Newlink?edit=${item?._id}`}
                  className="block px-5 py-2 bg-blue-600 text-white text-center rounded-md mt-5 hover:bg-blue-700 transition-colors"
                >
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <Link
              key={num}
              href={`?search=${encodeURIComponent(search)}&page=${num}`}
              className={`px-3 py-1 border rounded-md ${
                num == page
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {num}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
