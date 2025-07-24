import React from "react";
import BoxShadowGenerator from "./Clientcomp";
import AdvancedShadowBox from "./Advancedshadows";

function page() {
  return (
    <div>
      <BoxShadowGenerator />
      <AdvancedShadowBox />
    </div>
  );
}
export async function generateMetadata() {
  return {
    title:
      "LeetCode Questions by Topic – 100+ DSA Problems Categorized by Pattern",
    description:
      "Explore 100+ LeetCode questions organized by DSA patterns like Sliding Window, Two Pointers, Dynamic Programming, Binary Trees, and more. Practice 10 top problems per category to master interviews efficiently.",
    keywords:
      "leetcode questions by topic, leetcode categorized questions, dsa patterns leetcode, sliding window leetcode, dynamic programming problems, binary tree questions, two pointers problems, coding interview prep, leetcode top questions, data structures and algorithms practice",
  };
}

export default page;
