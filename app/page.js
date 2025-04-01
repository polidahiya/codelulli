import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Codelulli</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/tutorials"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Tutorials
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/webdev/firstwebpage"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
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
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100"
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold">Codelulli</h4>
              <p className="mt-2 text-gray-300">
                Empowering developers since 2025
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/tutorials"
                    className="text-gray-300 hover:text-white"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="mt-2 space-y-2">
                <p className="text-gray-300">support@codelulli.com</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-300">
            <p>&copy; 2025 Codelulli. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
