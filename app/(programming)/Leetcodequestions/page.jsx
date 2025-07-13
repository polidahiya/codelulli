import React from "react";
import Link from "next/link";

const leetcodeQuestions = {
  slidingWindow: [
    {
      title: "Longest Substring Without Repeating Characters",
      url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    },
    {
      title: "Minimum Size Subarray Sum",
      url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
    },
    {
      title: "Longest Repeating Character Replacement",
      url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    },
    {
      title: "Permutation in String",
      url: "https://leetcode.com/problems/permutation-in-string/",
    },
    {
      title: "Sliding Window Maximum",
      url: "https://leetcode.com/problems/sliding-window-maximum/",
    },
    {
      title: "Maximum Average Subarray I",
      url: "https://leetcode.com/problems/maximum-average-subarray-i/",
    },
    {
      title: "Subarrays with K Different Integers",
      url: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    },
    {
      title: "Find All Anagrams in a String",
      url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    },
    {
      title: "Replace the Substring for Balanced String",
      url: "https://leetcode.com/problems/replace-the-substring-for-balanced-string/",
    },
    {
      title: "Count Number of Nice Subarrays",
      url: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
    },
  ],

  twoPointers: [
    {
      title: "Two Sum II - Input Array Is Sorted",
      url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    },
    { title: "3Sum", url: "https://leetcode.com/problems/3sum/" },
    {
      title: "Remove Duplicates from Sorted Array",
      url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    },
    { title: "Move Zeroes", url: "https://leetcode.com/problems/move-zeroes/" },
    {
      title: "Container With Most Water",
      url: "https://leetcode.com/problems/container-with-most-water/",
    },
    {
      title: "Valid Palindrome",
      url: "https://leetcode.com/problems/valid-palindrome/",
    },
    {
      title: "Squares of a Sorted Array",
      url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
    },
    {
      title: "Reverse String",
      url: "https://leetcode.com/problems/reverse-string/",
    },
    {
      title: "Remove Element",
      url: "https://leetcode.com/problems/remove-element/",
    },
    { title: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/" },
  ],

  fastSlowPointers: [
    {
      title: "Linked List Cycle",
      url: "https://leetcode.com/problems/linked-list-cycle/",
    },
    {
      title: "Find the Duplicate Number",
      url: "https://leetcode.com/problems/find-the-duplicate-number/",
    },
    {
      title: "Happy Number",
      url: "https://leetcode.com/problems/happy-number/",
    },
    {
      title: "Middle of the Linked List",
      url: "https://leetcode.com/problems/middle-of-the-linked-list/",
    },
    {
      title: "Palindrome Linked List",
      url: "https://leetcode.com/problems/palindrome-linked-list/",
    },
    {
      title: "Detect Cycle in Linked List",
      url: "https://leetcode.com/problems/linked-list-cycle-ii/",
    },
    {
      title: "Reorder List",
      url: "https://leetcode.com/problems/reorder-list/",
    },
    {
      title: "Intersection of Two Linked Lists",
      url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    },
    {
      title: "Remove Duplicates from Sorted List",
      url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
    },
    {
      title: "Remove Duplicates from Sorted List II",
      url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
    },
  ],

  prefixSum: [
    {
      title: "Range Sum Query - Immutable",
      url: "https://leetcode.com/problems/range-sum-query-immutable/",
    },
    {
      title: "Subarray Sum Equals K",
      url: "https://leetcode.com/problems/subarray-sum-equals-k/",
    },
    {
      title: "Find Pivot Index",
      url: "https://leetcode.com/problems/find-pivot-index/",
    },
    {
      title: "Maximum Size Subarray Sum Equals k",
      url: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
    },
    {
      title: "Minimum Value to Get Positive Step by Step Sum",
      url: "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/",
    },
    {
      title: "Split Array into Consecutive Subsequences",
      url: "https://leetcode.com/problems/split-array-into-consecutive-subsequences/",
    },
    {
      title: "Number of Subarrays with Bounded Maximum",
      url: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/",
    },
    {
      title: "Range Sum Query 2D - Immutable",
      url: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
    },
    {
      title: "Count of Range Sum",
      url: "https://leetcode.com/problems/count-of-range-sum/",
    },
    {
      title: "Maximum Sum of Two Non-Overlapping Subarrays",
      url: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/",
    },
  ],

  binarySearch: [
    {
      title: "Binary Search",
      url: "https://leetcode.com/problems/binary-search/",
    },
    {
      title: "Search in Rotated Sorted Array",
      url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    },
    {
      title: "Find First and Last Position of Element in Sorted Array",
      url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    },
    {
      title: "Median of Two Sorted Arrays",
      url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    },
    {
      title: "Koko Eating Bananas",
      url: "https://leetcode.com/problems/koko-eating-bananas/",
    },
    {
      title: "Capacity To Ship Packages Within D Days",
      url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    },
    {
      title: "Find Peak Element",
      url: "https://leetcode.com/problems/find-peak-element/",
    },
    {
      title: "Aggressive Cows (on GFG)",
      url: "https://www.geeksforgeeks.org/aggressive-cows-dynamic-programming-approach/",
    },
    {
      title: "Find Minimum in Rotated Sorted Array",
      url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    },
    {
      title: "Search a 2D Matrix",
      url: "https://leetcode.com/problems/search-a-2d-matrix/",
    },
  ],

  linkedList: [
    {
      title: "Reverse Linked List",
      url: "https://leetcode.com/problems/reverse-linked-list/",
    },
    {
      title: "Merge Two Sorted Lists",
      url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    },
    {
      title: "Remove Nth Node From End of List",
      url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    },
    {
      title: "Add Two Numbers",
      url: "https://leetcode.com/problems/add-two-numbers/",
    },
    {
      title: "Linked List Cycle II",
      url: "https://leetcode.com/problems/linked-list-cycle-ii/",
    },
    {
      title: "Odd Even Linked List",
      url: "https://leetcode.com/problems/odd-even-linked-list/",
    },
    { title: "Rotate List", url: "https://leetcode.com/problems/rotate-list/" },
    {
      title: "Copy List with Random Pointer",
      url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    },
    { title: "Sort List", url: "https://leetcode.com/problems/sort-list/" },
    {
      title: "Swap Nodes in Pairs",
      url: "https://leetcode.com/problems/swap-nodes-in-pairs/",
    },
  ],

  backtracking: [
    { title: "Subsets", url: "https://leetcode.com/problems/subsets/" },
    {
      title: "Permutations",
      url: "https://leetcode.com/problems/permutations/",
    },
    {
      title: "Combination Sum",
      url: "https://leetcode.com/problems/combination-sum/",
    },
    { title: "Word Search", url: "https://leetcode.com/problems/word-search/" },
    { title: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
    {
      title: "Palindrome Partitioning",
      url: "https://leetcode.com/problems/palindrome-partitioning/",
    },
    {
      title: "Letter Combinations of a Phone Number",
      url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    },
    {
      title: "Generate Parentheses",
      url: "https://leetcode.com/problems/generate-parentheses/",
    },
    {
      title: "Combination Sum II",
      url: "https://leetcode.com/problems/combination-sum-ii/",
    },
    {
      title: "Sudoku Solver",
      url: "https://leetcode.com/problems/sudoku-solver/",
    },
  ],

  stack: [
    {
      title: "Valid Parentheses",
      url: "https://leetcode.com/problems/valid-parentheses/",
    },
    {
      title: "Daily Temperatures",
      url: "https://leetcode.com/problems/daily-temperatures/",
    },
    { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/" },
    {
      title: "Largest Rectangle in Histogram",
      url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    },
    {
      title: "Next Greater Element I",
      url: "https://leetcode.com/problems/next-greater-element-i/",
    },
    {
      title: "Evaluate Reverse Polish Notation",
      url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    },
    {
      title: "Asteroid Collision",
      url: "https://leetcode.com/problems/asteroid-collision/",
    },
    {
      title: "Basic Calculator",
      url: "https://leetcode.com/problems/basic-calculator/",
    },
    {
      title: "Remove K Digits",
      url: "https://leetcode.com/problems/remove-k-digits/",
    },
    {
      title: "Decode String",
      url: "https://leetcode.com/problems/decode-string/",
    },
  ],

  binaryTree: [
    {
      title: "Binary Tree Inorder Traversal",
      url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    },
    {
      title: "Maximum Depth of Binary Tree",
      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    },
    {
      title: "Symmetric Tree",
      url: "https://leetcode.com/problems/symmetric-tree/",
    },
    { title: "Path Sum", url: "https://leetcode.com/problems/path-sum/" },
    {
      title: "Serialize and Deserialize Binary Tree",
      url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    },
    { title: "Same Tree", url: "https://leetcode.com/problems/same-tree/" },
    {
      title: "Invert Binary Tree",
      url: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      title: "Binary Tree Level Order Traversal",
      url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    },
    {
      title: "Lowest Common Ancestor of a Binary Tree",
      url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    },
    {
      title: "Diameter of Binary Tree",
      url: "https://leetcode.com/problems/diameter-of-binary-tree/",
    },
  ],

  dynamicProgramming: [
    {
      title: "Climbing Stairs",
      url: "https://leetcode.com/problems/climbing-stairs/",
    },
    {
      title: "House Robber",
      url: "https://leetcode.com/problems/house-robber/",
    },
    {
      title: "Longest Palindromic Substring",
      url: "https://leetcode.com/problems/longest-palindromic-substring/",
    },
    { title: "Coin Change", url: "https://leetcode.com/problems/coin-change/" },
    {
      title: "Longest Increasing Subsequence",
      url: "https://leetcode.com/problems/longest-increasing-subsequence/",
    },
    {
      title: "Unique Paths",
      url: "https://leetcode.com/problems/unique-paths/",
    },
    {
      title: "Edit Distance",
      url: "https://leetcode.com/problems/edit-distance/",
    },
    {
      title: "Partition Equal Subset Sum",
      url: "https://leetcode.com/problems/partition-equal-subset-sum/",
    },
    { title: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/" },
    {
      title: "Maximum Product Subarray",
      url: "https://leetcode.com/problems/maximum-product-subarray/",
    },
  ],
};

export default function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">
        📘 LeetCode Questions by Topic
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center max-w-3xl mx-auto">
        Looking to ace coding interviews? 🚀 This curated list of LeetCode
        questions is organized by popular DSA patterns like{" "}
        <strong>Sliding Window</strong>, <strong>Two Pointers</strong>,{" "}
        <strong>Binary Search</strong>, <strong>Dynamic Programming</strong>,
        and more. Each category includes 10 must-practice problems with direct
        links to help you master concepts efficiently. Ideal for beginners,
        intermediates, and job seekers!
      </p>

      <div className="space-y-10">
        {Object.entries(leetcodeQuestions).map(([category, questions]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold capitalize mb-4 border-t pb-2 pt-4 pl-5 border-gray-300 dark:border-gray-700 first:border-t-0">
              {category.replace(/([A-Z])/g, " $1")}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {questions.map((q, index) => {
                const url = new URL(q.url); // Validate input
                const cleanLink = url.hostname + url.pathname + url.search;
                const encoded = encodeURIComponent(cleanLink);
                return (
                  <li key={index}>
                    <Link
                      href={`/L?L=${encoded}`}
                      rel="noopener noreferrer"
                      className="block bg-white dark:bg-gray-800 p-4 rounded-md shadow hover:shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      {index + 1}. {q.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
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
    // openGraph: {
    //   images: ogImage,
    // },
  };
}
