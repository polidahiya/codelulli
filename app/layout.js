import "./globals.css";
import Script from "next/script";
import Googleanayltics from "./Googleananlytics";

export const metadata = {
  title: "Codelulli-Simply Genius!",
  description:
    "Contact Codelulli for expert web development tutorials. Reach out via email or social media for support on mastering React, Tailwind CSS, and more. Start your coding journey today!",
  keywords: [
    "web development tutorials",
    "React tutorials",
    "Tailwind CSS",
    "coding for beginners",
    "Codelulli contact",
    "learn web development",
    "programming tutorials",
    "React JS",
    "front-end development",
    "online coding lessons",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* google analytics */}
        <Googleanayltics />
        {/* google adsense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7398670337880164"
          crossorigin="anonymous"
        ></Script>
        <meta
          name="google-adsense-account"
          content="ca-pub-7398670337880164"
        ></meta>
        {/* search console verification */}
        {/* url */}
        <meta
          name="google-site-verification"
          content="Rvp7Y-_9q60aAlayucwyJhaYlYv0aTw-UOWMbTqa4Xs"
        />
        {/* domain */}
        <meta
          name="google-site-verification"
          content="GLY2qwoqDD8WC_7qvDCrJy3noWnu0Vs8-qw2y9vlQNM"
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
