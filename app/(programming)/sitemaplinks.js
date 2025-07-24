import { domain } from "../metadata";

export const directlinks = [
  {
    link: "/Leetcodequestions",
    title: "Leet code questions",
    img: "/Images/Programming/Leetcodequestions.png",
  },
  {
    link: "/Color-palette-generator",
    title: "Color palette generator",
    img: "/Images/Programming/colorpalategenerator.png",
  },
  {
    link: "/Responsive-preview",
    title: "Responsive preview",
    img: "/Images/Programming/responsivepreview.png",
  },
  {
    link: "/Css-clip-path-generator",
    title: "Css clip path generator",
    img: "/Images/Programming/clippathgenerator.png",
  },
  {
    link: "/Pythonquiz/1",
    title: "Python quiz",
    img: "/Images/Programming/pythonquiz.png",
  },
  {
    link: "/Box-Shadow-Generator",
    title: "Box Shadow Generator",
    img: "/Images/Programming/pythonquiz.png",
  },
];
export default function programminglink() {
  const today = new Date().toISOString();
  const links2 = directlinks.map((link) => ({
    loc: `${domain}${link?.link}`,
    lastmod: today,
    changefreq: "daily",
    priority: "0.9",
  }));
  return [...links2];
}
