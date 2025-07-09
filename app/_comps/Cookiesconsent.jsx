"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    personalizedAds: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie_consent_detailed");
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (consent) => {
    localStorage.setItem("cookie_consent_detailed", JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      personalizedAds: true,
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      personalizedAds: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const handleCheckboxChange = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-300 px-4 py-5 shadow-lg text-gray-800">
      {!showSettings ? (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm flex-1">
            🍪 We use cookies to personalize ads and analyze traffic. By
            continuing to use our site, you consent to our use of cookies.{" "}
            <a
              href="/privacy-policy"
              className="underline text-blue-500 hover:text-blue-600"
            >
              Learn more
            </a>
          </p>
          <div className="flex gap-2 flex-wrap text-sm">
            <button
              onClick={handleRejectAll}
              className="border px-4 py-2 rounded hover:bg-gray-100"
            >
              Reject
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="border px-4 py-2 rounded hover:bg-gray-100"
            >
              Manage Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Accept All
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Manage Cookie Preferences</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked
                disabled
                className="accent-blue-600"
              />
              <span className="text-sm">Necessary cookies (always active)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handleCheckboxChange("analytics")}
                className="accent-blue-600"
              />
              <span className="text-sm">Analytics cookies</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={preferences.personalizedAds}
                onChange={() => handleCheckboxChange("personalizedAds")}
                className="accent-blue-600"
              />
              <span className="text-sm">Personalized ads cookies</span>
            </label>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowSettings(false)}
              className="border px-4 py-2 rounded hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={handleSavePreferences}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
