import { questions } from "./Pythonquiz/[page]/_comps/Questions";
import { domain } from "../metadata";

const directlinks = ["/Leetcodequestions"];
export default function programminglink() {
  const today = new Date().toISOString();
  const links1 = Object.keys(questions).map((key) => ({
    loc: `${domain}/pythonquiz/${key}`,
    lastmod: today,
    changefreq: "daily",
    priority: "0.9",
  }));
  const links2 = directlinks.map((link) => ({
    loc: `${domain}${link}`,
    lastmod: today,
    changefreq: "daily",
    priority: "0.9",
  }));
  return [...links1, ...links2];
}
