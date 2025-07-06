"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RedirectPage({ link }) {
  const [countdown, setCountdown] = useState(5);
  const [linkenabled, setlinkenabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      setlinkenabled(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="max-w-xl w-full mx-auto flex flex-col items-center justify-center h-[calc(50vh)]">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">
        Your link will be available in {countdown} second
        {countdown !== 1 && "s"}
      </h1>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Please wait while the button unlocks.
      </p>

      <Link
        href={link}
        replace
        className={`px-6 py-3 rounded-lg text-white font-semibold transition text-sm sm:text-base ${
          linkenabled
            ? "bg-blue-600 hover:bg-blue-700 cursor-pointer inline-block"
            : "hidden"
        }`}
      >
        {linkenabled ? "Go to Link" : `Please Wait (${countdown}s)`}
      </Link>
    </div>
  );
}
