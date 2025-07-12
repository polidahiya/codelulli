import React from "react";
import Options from "./_comps/Options";
import { questions } from "./_comps/Questions";
import Link from "next/link";
import { notFound } from "next/navigation";

async function page({ params }) {
  const { page = 1 } = await params;
  const questionset = questions[Number(page)];
  const previousquiz = Number(page) - 1;
  const nextquiz = Number(page) + 1;

  if (!questionset) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-white dark:bg-gray-900 rounded-xl shadow dark:shadow-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Python Quiz
      </h1>
      {questionset.map((q, qIndex) => (
        <Options q={q} qIndex={qIndex} key={q.question} page={page} />
      ))}
      {/* next and prev buttons */}
      <div className="flex gap-4 mt-10">
        {questions[previousquiz] && (
          <Link
            href={`/Pythonquiz/${Number(page) - 1}`}
            className="flex-1 text-center px-6 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            ← Previous
          </Link>
        )}
        {questions[nextquiz] && (
          <Link
            href={`/Pythonquiz/${Number(page) + 1}`}
            className="flex-1 text-center px-6 py-2 rounded-md border border-blue-500 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600 dark:hover:bg-blue-800 transition-all"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { page = 1 } = await params;

  return {
    title: `Python Quiz - ${page} Online – Test Your Python Skills with 100+ Questions`,
    description:
      "Take our free Python quiz and test your programming knowledge with over 100 curated questions. Improve your Python skills with instant feedback and explanations. Great for beginners and experienced developers!",
    keywords:
      "python quiz, python quiz online, python mcq, python test, python multiple choice questions, python practice quiz, python programming quiz, python online test, python coding quiz, python beginner quiz, advanced python quiz",
    // openGraph: {
    //   images: ogImage,
    // },
  };
}

export default page;
