"use client";
import { useEffect } from "react";
import { Googleadsid } from "@/app/metadata";

export default function Ads() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "600px" }}
        data-ad-client={Googleadsid}
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
