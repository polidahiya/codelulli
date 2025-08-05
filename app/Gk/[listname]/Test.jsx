"use client";
import React, { useState, useEffect } from "react";
import Scoredisplay from "@/app/_comps/Scoredisplay";
import Ads from "@/app/_comps/ads/Ads";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Test({ data, qline }) {
  const questions = Object.entries(data).map(([question, answer]) => ({
    question,
    answer,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];

  const generateOptions = () => {
    const incorrectAnswers = questions
      .filter((q) => q.answer !== currentQuestion.answer)
      .map((q) => q.answer);

    const random3 = shuffleArray(incorrectAnswers).slice(0, 3);
    const allOptions = shuffleArray([currentQuestion.answer, ...random3]);
    setOptions(allOptions);
  };

  useEffect(() => {
    generateOptions();
    setSelectedOption(null);
  }, [currentIndex]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-10">
      {!showResult ? (
        <>
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Q{currentIndex + 1}.{" "}
              {qline.replace(/____/, currentQuestion.question)}
            </div>
            <div className="grid gap-4">
              {options.map((item, i) => (
                <button
                  key={i}
                  className={`w-full py-2 px-4 rounded-xl border transition
                    ${
                      selectedOption
                        ? item === currentQuestion.answer
                          ? "bg-green-600 text-white"
                          : item === selectedOption
                          ? "bg-red-600 text-white"
                          : "dark:text-gray-100"
                        : "lg:hover:bg-gray-100 dark:lg:hover:bg-gray-700 dark:text-gray-100"
                    }`}
                  onClick={() => handleAnswer(item)}
                  disabled={!!selectedOption}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <Ads type={2} />
        </>
      ) : (
        <div className="text-center space-y-6 max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <Scoredisplay
            score={Math.round((score / questions.length) * 100)}
            text="Your Score"
          />
          <div className="text-xl font-semibold text-gray-800 dark:text-white">
            You answered {score} out of {questions.length} questions correctly.
          </div>
        </div>
      )}
    </div>
  );
}
