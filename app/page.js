import React from "react";
import Link from "next/link";
import Navbar from "./(frontend)/_globalcomps/navbar/Navbar";
import Footer from "./(frontend)/_globalcomps/footer/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Learn Web Development with Ease
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Master React, Tailwind CSS, and more with our comprehensive
              tutorials
            </p>
            <div className="mt-8">
              <Link
                href="/webdev/firstwebpage"
                className="inline-block bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100"
              >
                Start Learning Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Interactive Tutorials
            </h3>
            <p className="mt-2 text-gray-600">
              Learn by doing with our hands-on coding exercises and projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Expert Instructors
            </h3>
            <p className="mt-2 text-gray-600">
              Get guidance from industry professionals with years of experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Community Support
            </h3>
            <p className="mt-2 text-gray-600">
              Join our vibrant community to collaborate and grow together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
