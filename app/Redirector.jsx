"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const ADSENSE_CONFIG = {
  client: "ca-pub-7398670337880164", // Replace with real AdSense ID
  slots: {
    left: "1111111111",
    right: "2222222222",
    bottom: "3333333333",
  },
};

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

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense push error:", e);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row pt-4 pb-28 md:pb-24">
        {/* Left Ad - Hidden on small screens */}
        <div className="hidden md:block w-full md:w-1/5 p-4">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", height: 600 }}
            data-ad-client={ADSENSE_CONFIG.client}
            data-ad-slot={ADSENSE_CONFIG.slots.left}
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <div className="w-full max-w-xl">
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
        </div>

        {/* Right Ad - Hidden on small screens */}
        <div className="hidden md:block w-full md:w-1/5 p-4">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", height: 600 }}
            data-ad-client={ADSENSE_CONFIG.client}
            data-ad-slot={ADSENSE_CONFIG.slots.right}
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

        {/* Bottom Ad - Always visible but mobile-optimized */}
        <div className="w-full fixed bottom-0 left-0 bg-white p-2 border-t border-gray-200 z-50 text-center">
          <div className="max-w-6xl mx-auto">
            <ins
              className="adsbygoogle"
              style={{ display: "block", width: "100%", height: 90 }}
              data-ad-client={ADSENSE_CONFIG.client}
              data-ad-slot={ADSENSE_CONFIG.slots.bottom}
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
      </div>
    </>
  );
}
