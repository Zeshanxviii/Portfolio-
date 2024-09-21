import React, { useState, useEffect } from "react";

const sentences = [
  "Let's connect and work together to create amazing things!",
  "I'm passionate about open-source contributions.",
  "Every line of code is a step toward innovation.",
  "Software development is a journey, not a destination.",
];

const roles = [
  "Software Developer",
  "Open Source Contributor",
  "Tech Enthusiast",
  "Lifelong Learner",
];

function Home() {
  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  const [index, setIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true); // Start fading in
      }, 700); // Delay for fade out effect
    }, 4500); // Change sentence and role every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    setCurrentSentence(sentences[index]);
    setCurrentRole(roles[roleIndex]);
  }, [index, roleIndex]);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-custom-3 gap-1 auto-rows-max justify-center p-10">
        <div className="p-9 backdrop-opacity-10">
          <div className="text-8xl font-extrabold font-firasans text-white">
            Hello,
            <br />
            <div className="whitespace-nowrap leading-relaxed">
            I'm{" "}
              <span className="font-extrabold font-mono text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              乙eeshan
              </span>
            </div>
          </div>
          <h2 className="text-5xl text-white pt-8 font-semibold whitespace-nowrap">
            <span
              className={`transition-opacity duration-700 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {currentRole}
            </span>
          </h2>
          <br />
          <p
            className={`text-2xl font-light text-white transition-opacity duration-700 antialiased ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentSentence}
          </p>
        </div>
        <div className="p-12 ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            // class="feather feather-github"
            className="feather feather-github float-right text-white"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>
      </div>
      <button class="outline outline-offset-2 outline-pink-500 rounded-lg px-5 py-3 hover:bg-pink-500 hover:text-white text-pink-500 font-bold">
        Let's Connect
      </button>
    </div>
  );
}

export default Home;
