import React, { useState, useEffect } from "react";

const sentences = [
  "Let's connect and work together to create amazing things!",
  "I'm passionate about open-source contributions.          ",
  "Every line of code is a step toward innovation.          ",
  "Software development is a journey, not a destination.    ",
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
    }, 3500); // Change sentence and role every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    setCurrentSentence(sentences[index]);
    setCurrentRole(roles[roleIndex]);
  }, [index, roleIndex]);

  const handleConnectClick = () => {
    const email = "mzh881061@gmail.com"; // Replace with your email
    const subject = "Let's Connect!";
    const body =
      "Hi,\n\nI would love to connect with you.\n\nBest regards,\nYour Name";

    // Encode the subject and body to handle spaces and special characters
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink; // Opens the email client
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-custom-3 gap-5 justify-center p-5 md:p-10">
        <div className="p-6 backdrop-opacity-10">
          <div className="text-4xl md:text-8xl font-extrabold font-firasans text-slate-900 dark:text-white">
            Hello,
            <br />
            <div className="whitespace-nowrap leading-relaxed">
              I'm{" "}
              <span className="font-extrabold font-mono text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                乙eeshan
              </span>
            </div>
          </div>
          <h2 className="text-2xl md:text-5xl dark:text-white pt-4 font-semibold whitespace-nowrap">
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
            className={`text-lg md:text-2xl font-light dark:text-white transition-opacity duration-700 antialiased ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentSentence}
          </p>
        </div>
        <div className="flex justify-center items-center p-6 md:block ">
          <a href="https://github.com/Zeshanxviii">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github cursor-pointer dark:text-white  md:float-right"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <button 
      onClick={handleConnectClick}
      className="outline outline-offset-2 outline-pink-500 rounded-lg px-5 py-3 hover:bg-pink-500 hover:text-white text-pink-500 font-bold mt-5">
        Let's Connect
      </button>
    </div>
  );
}

export default Home;

