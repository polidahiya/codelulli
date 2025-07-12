import "./globals.css";
import Googleanayltics from "./Googleananlytics";
import { Mulish } from "next/font/google";
import Navbar from "./_comps/navbar/Navbar";
import Context from "./Context";
import Confirmdialogbox from "./_comps/Confirmationdialogbox";
import CookieConsent from "./_comps/Cookiesconsent";
import Footer from "./_comps/Footer";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Explore Ideas, Insights & Stories | Your Daily Dose of Blogs",
  description:
    "Discover a wide range of blogs covering lifestyle, tech, travel, health, business, and more. Stay informed, inspired, and entertained — one post at a time.",
  keywords: [
    "blogging website",
    "latest blog posts",
    "personal blogs",
    "lifestyle blogs",
    "tech blogs",
    "travel stories",
    "health tips",
    "business insights",
    "content writing",
    "online articles",
    "storytelling",
    "daily blogs",
    "blog platform",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* google analytics */}
        <Googleanayltics />
        {/* google adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7398670337880164"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-7398670337880164" />
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
      <body
        className={`${mulish.className} antialiased max-w-[1900px] mx-auto`}
      >
        <Context>
          <Confirmdialogbox />
          <CookieConsent />
          <Navbar />
          {children}
          <Footer />
        </Context>
      </body>
    </html>
  );
}
