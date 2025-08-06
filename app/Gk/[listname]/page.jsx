import React from "react";
import Clientcomp from "./Clientcomp";
import { metadatafn, metadata } from "./Data";
import { notFound } from "next/navigation";
import Link from "next/link";

async function page({ params }) {
  const { listname } = await params;
  const data = metadatafn(listname);
  if (!data) return notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white mt-10">
        {data?.title}
      </h1>
      <Clientcomp
        data={data?.data}
        qline={data?.qline}
        title={data?.title}
        listname={listname}
      />
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
      <p className="mt-10 text-center">
        Please note the info provided could be outdated.
      </p>
    </div>
  );
}

export default page;
