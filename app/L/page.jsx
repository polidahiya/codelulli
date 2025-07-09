import React from "react";
import Redirector from "../Redirector";
import RentBeanAds from "../_comps/ads/Rentbeanads";

async function page({ searchParams }) {
  const { L } = await searchParams;

  const refirectlink = `https://${L}`;
  return (
    <div>
      <Redirector link={refirectlink} />
      <div className="max-w-2xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-2xl font-bold mb-4">
          Redirecting You to a your destination...
        </h1>

        <p className="mb-4">
          You're being redirected to an external website that contains helpful
          content or tools related to your interest. We review each link to
          ensure it's relevant and safe for our users.
        </p>

        <p className="mb-6">
          This page will automatically redirect you in a few seconds. If you're
          not redirected,{" "}
          <a
            href={refirectlink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            click here
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Why We’re Redirecting You
        </h2>
        <p className="mb-4">
          At <strong>CodeLulli</strong>, we believe in curating useful resources
          across the web. Instead of copying content, we point you directly to
          official sites, tools, or articles that save you time and deliver
          accurate information.
        </p>

        <h2 className="text-xl font-semibold mb-2">Want to Explore More?</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            📘 Check our latest{" "}
            <a href="/blog" className="text-blue-600 underline">
              blog posts
            </a>{" "}
            for tutorials and tips
          </li>
          <li>
            📬 Subscribe to our{" "}
            <a href="/newsletter" className="text-blue-600 underline">
              newsletter
            </a>{" "}
            for weekly tech finds
          </li>
          <li>📎 Bookmark us for future quick resources</li>
        </ul>

        <p>
          Thank you for using <strong>CodeLulli</strong> — your gateway to
          curated, high-quality content.
        </p>
      </div>
      <RentBeanAds />
    </div>
  );
}

export default page;
