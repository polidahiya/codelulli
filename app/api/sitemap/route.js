"use server";
import { getcollection } from "../../Mongodb";

const xmlEscape = (str) =>
  str
    ?.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const today = new Date().toISOString();

const generateLinkurls = (allLinks) =>
  allLinks.map((link) => ({
    loc: `https://codelulli.vercel.app/C/${link?.linknumber}`,
    lastmod: today,
    changefreq: "daily",
    priority: "0.9",
  }));

export async function GET() {
  try {
    const { Linkscollection } = await getcollection();
    const allLinks = await Linkscollection.find().toArray();
    const allUrls = generateLinkurls(allLinks);

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allUrls
    .map(
      (url) => `
    <url>
      <loc>${xmlEscape(url.loc)}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
      ${
        url.image
          ? `<image:image>
        <image:loc>${xmlEscape(url.image)}</image:loc>
        <image:caption>${xmlEscape(url.name)}</image:caption>
        <image:title>${xmlEscape(url.name)}</image:title>
      </image:image>`
          : ""
      }
    </url>`
    )
    .join("\n")}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Sitemap Generation Error:", error);
    return new Response(
      `<error><message>Failed to generate sitemap</message></error>`,
      {
        status: 500,
        headers: { "Content-Type": "application/xml" },
      }
    );
  }
}
