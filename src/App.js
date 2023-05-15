import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const text =
    "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.";
  const words = text.split(" ");

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollStep = window.innerHeight / (words.length + 1);

  let topPosition = 18;
  if (scrollPosition > words.length * scrollStep) {
    topPosition -=
      ((scrollPosition - words.length * scrollStep) / window.innerHeight) * 100;
  }

  return (
    <div className="App">
      <img src={logo} className="Logo" alt="logo" />
      <button className="JoinButton">Join beta</button>
      <div className="CenteredText" style={{ top: `${topPosition}%` }}>
        {words.map((word, index) => {
          const isHighlighted = scrollPosition > index * scrollStep;
          return (
            <span
              key={index}
              style={{
                color: `rgba(255, 255, 255, ${isHighlighted ? 1 : 0.2})`,
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
