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

export default function Learn({ data, qline, listname }) {
  const repeatlimit = 4;
  const autonexttime = 1000;
  const quelist = Object.keys(data);
  const Anslist = Object.values(data);
  const [questionnumber, setquestionnumber] = useState(0);
  const [options, setoptions] = useState([]);
  const [repeattimes, setrepeattimes] = useState(0);
  const [selectedoption, setselectedoption] = useState(null);
  const [previousque, setpreviousque] = useState(false);
  const [currentindex, setcurrentindex] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(listname);
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      console.log(parsed);

      setquestionnumber(parsed.questionnumber || 0);
      setcurrentindex(parsed.currentindex || 0);
    }
  }, []);

  const suffleoptions = (index) => {
    const correctoption = Anslist[index];
    const optionsotherthancorrect = Anslist.filter(
      (item) => item !== correctoption
    );
    const random3options = shuffleArray(optionsotherthancorrect).slice(0, 3);
    const options = shuffleArray([correctoption, ...random3options]);
    setoptions(options);
  };

  useEffect(() => {
    suffleoptions(currentindex);
  }, [questionnumber]);

  const nextquestion = () => {
    setselectedoption(null);
    if (repeattimes >= repeatlimit) {
      setquestionnumber((pre) => (quelist[pre + 1] ? pre + 1 : pre));
      setrepeattimes(0);
    } else {
      if (questionnumber === 0 || !previousque) {
        setrepeattimes(repeattimes + 1);
      }
    }

    if (previousque) {
      const randomindex = Math.floor(Math.random() * questionnumber);
      setcurrentindex(randomindex);
      suffleoptions(randomindex);
      setpreviousque(false);
    } else {
      setcurrentindex(questionnumber);
      suffleoptions(questionnumber);
      setpreviousque(true);
    }
    localStorage.setItem(
      listname,
      JSON.stringify({ questionnumber, currentindex })
    );
  };

  // Restart handler
  const restart = () => {
    setquestionnumber(0);
    setcurrentindex(0);
    setrepeattimes(0);
    setselectedoption(null);
    setpreviousque(false);
    suffleoptions(0);
    localStorage.removeItem(listname);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="">
        <Scoredisplay
          score={Math.round((questionnumber / quelist.length) * 100)}
          text="Progress"
        />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Q. {qline.replace(/____/, quelist[currentindex])}
        </div>
        <div className="grid gap-4">
          {options.map((item, i) => (
            <button
              key={i}
              className={`w-full py-2 px-4 rounded-xl border transition
                ${
                  selectedoption
                    ? item === Anslist[currentindex]
                      ? "bg-green-600 text-white"
                      : item === selectedoption
                      ? "bg-red-600 text-white"
                      : "dark:text-gray-100"
                    : "lg:hover:bg-gray-100 dark:lg:hover:bg-gray-700 dark:text-gray-100"
                }`}
              onClick={() => {
                setselectedoption(item);
                setTimeout(nextquestion, autonexttime);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className="mt-6 w-full py-2 px-4 rounded-xl border bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          onClick={restart}
        >
          Restart
        </button>
      </div>
      <Ads type={2} />
    </div>
  );
}
