"use client";
import React, { useState } from "react";

export default function Options({ q, qIndex, page }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelect = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return; // prevent changing answer
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  return (
    <div key={qIndex} className="mb-6">
      <pre className="font-semibold mb-2 text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
        {qIndex + 1 + (page - 1) * 10}. {q.question}
      </pre>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((option, oIndex) => {
          const isCorrect = option === q.correct;
          const isSelected = selectedAnswers[qIndex] === option;
          const isAnswered = qIndex in selectedAnswers;

          let bgColor =
            "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700";
          if (isAnswered) {
            if (isCorrect)
              bgColor =
                "bg-green-200 border-green-500 dark:bg-green-700 dark:border-green-400";
            else if (isSelected)
              bgColor =
                "bg-red-200 border-red-500 dark:bg-red-700 dark:border-red-400";
          }

          return (
            <button
              key={oIndex}
              onClick={() => handleSelect(qIndex, option)}
              className={`py-2 px-4 rounded border text-left transition-all ${bgColor} text-gray-900 dark:text-gray-100`}
              disabled={isAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
