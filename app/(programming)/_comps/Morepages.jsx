import React from "react";
import Link from "next/link";
import { directlinks } from "../sitemaplinks";
import Nextimage from "@/app/_comps/Nextimage";

function Morepages() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Explore Programming Topics
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {directlinks.map((item, i) => (
          <Link
            key={i}
            href={item?.link}
            className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 transition hover:shadow-lg"
            aria-label={`Go to ${item?.title}`}
          >
            {/* 1:1 Image */}
            <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-zinc-700">
              <Nextimage
                src={item?.img}
                alt={item?.title}
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Title */}
            <div className="p-3 text-center">
              <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                {item?.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Morepages;
