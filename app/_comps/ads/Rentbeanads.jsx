import React from "react";
import Link from "next/link";

const ads = [
  {
    title: "Stylish Dining Sets for Rent",
    desc: "Modern dining tables and chairs perfect for homes and events. Rent from ₹499/month.",
    img: "https://res.cloudinary.com/dmn8xdsq4/image/upload/v1750682680/Rentbean/i5p65uviyewdreti9dmj.jpg",
    link: "https://rentbean.in/",
  },
  {
    title: "Baby Products on Rent",
    desc: "Strollers, cribs, and toys with safety guaranteed. Starting at ₹299/month.",
    img: "https://res.cloudinary.com/dmn8xdsq4/image/upload/v1739033168/Rentbean/m2osybvwy3gerjaaf2v4.jpg",
    link: "https://rentbean.in/",
  },
  {
    title: "Gaming Consoles (PS4/PS5) on Rent",
    desc: "Get PlayStation and Xbox consoles delivered to your door. Affordable rental plans available.",
    img: "https://res.cloudinary.com/dmn8xdsq4/image/upload/v1744026849/Rentbean/wimp4zvhgsqouc6qldji.jpg",
    link: "https://rentbean.in/",
  },
];

export default function GoogleStyleAd() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-center text-sm uppercase font-semibold text-gray-500 mb-4">
        Advertisement · Sponsored by RentBean
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad, i) => (
          <Link
            key={i}
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col border border-gray-200 rounded-xl hover:shadow-md transition overflow-hidden bg-white"
          >
            <div className="w-full h-48 bg-gray-100 overflow-hidden">
              <img
                src={ad.img}
                alt={ad.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {ad.title}
                </h3>
                <p className="text-sm text-gray-600">{ad.desc}</p>
              </div>
              <span className="mt-4 text-sm text-blue-600 font-medium hover:underline">
                Rent Now →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
