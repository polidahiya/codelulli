import React from "react";
import Link from "next/link";

function Footer() {
  return (
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
                <Link href="/about" className="text-gray-300 hover:text-white">
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
  );
}

export default Footer;
