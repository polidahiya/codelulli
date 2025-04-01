import React from "react";

const contactInfo = {
  siteName: "Codelulli",
  email: "support@codelulli.com",
  twitter: "https://twitter.com/codelulli",
  github: "https://github.com/codelulli",
  foundingYear: "2025",
};

const Contact = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          We{"'"}d love to hear from you! Get in touch with our team.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h3 className="text-2xl font-semibold text-primary mb-6">
          Get in Touch
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Email</h4>
            <p className="text-gray-600">{contactInfo.email}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Social Media
            </h4>
            <div className="flex space-x-4 mt-2">
              <a
                href={contactInfo.twitter}
                className="text-primary hover:text-indigo-800"
              >
                Twitter
              </a>
              <a
                href={contactInfo.github}
                className="text-primary hover:text-indigo-800"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-semibold text-primary mb-6">
          Send Us a Message
        </h3>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-protext-primary text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
