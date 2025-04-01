import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About Us
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Empowering the next generation of web developers
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-600 leading-relaxed">
          At WebDev Tutorials, we{"'"}re dedicated to making web development
          accessible to everyone. We believe that with the right guidance and
          resources, anyone can master modern web technologies like React and
          Tailwind CSS. Our goal is to provide high-quality, practical tutorials
          that bridge the gap between beginner concepts and real-world
          applications.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-indigo-200 rounded-full mx-auto mb-4"></div>
            <h4 className="text-xl font-semibold text-gray-900">Jane Doe</h4>
            <p className="text-indigo-600">Founder & Lead Instructor</p>
            <p className="mt-2 text-gray-600">10+ years in web development</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-indigo-200 rounded-full mx-auto mb-4"></div>
            <h4 className="text-xl font-semibold text-gray-900">John Smith</h4>
            <p className="text-indigo-600">Senior Developer</p>
            <p className="mt-2 text-gray-600">React Specialist</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-indigo-200 rounded-full mx-auto mb-4"></div>
            <h4 className="text-xl font-semibold text-gray-900">Emily Chen</h4>
            <p className="text-indigo-600">Content Creator</p>
            <p className="mt-2 text-gray-600">UI/UX Expert</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-indigo-600 text-white py-12 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to Start Learning?
        </h3>
        <p className="text-lg text-indigo-100 mb-6">
          Join our community and begin your web development journey today!
        </p>
        <Link
          href="/tutorials"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100"
        >
          Explore Tutorials
        </Link>
      </div>
    </div>
  );
};

export default page;
