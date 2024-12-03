import { useRef } from "react";
import React from "react";

import Share from "../Assets/ShareSVG";
import Linkedin from "../Assets/LinkedinSVG";
import Github from "../Assets/GithubSVG";

export default function Form({
  colorPref,
  name,
  setName,
  icon,
  setPersonsInfo,
  setDisplayFrame,
  displayFrame,
}) {
  document.addEventListener("DOMContentLoaded", () => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", updateViewportHeight);
    updateViewportHeight();
  });

  const placeholder = ["First Name", "Middle Name", "Last Name"];
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const inputRefArray = [inputRef1, inputRef2, inputRef3];

  const handleKeyDown = (e, inputRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputRef === 2) {
        inputRef3.current.blur();
        return;
      }
      inputRefArray[inputRef + 1].current.focus();
    }
  };

  return (
    <form className="flex-col">
      <div className="input-wrapper flex-col">
        {placeholder.map((p, i) => (
          <input
            ref={inputRefArray[i]}
            required={i !== 1}
            type="text"
            placeholder={p}
            style={{ color: colorPref }}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onChange={(e) => {
              setName({
                ...name,
                [placeholder[i]]: e.target.value
                  .replace(/\s+/g, " ")
                  .split("")
                  .map((l) => l.toUpperCase())
                  .join(""),
              });
              if (i !== 1) {
                e.target.value.length < 1
                  ? (e.target.className = "error")
                  : (e.target.className = "");
              }
            }}
            key={i}
          />
        ))}
      </div>

      <div className="socials-wrapper flex-row">
        <Share />

        <a
          href="https://github.com/marcelxeballar"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/marcel-eballar-961345317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Linkedin />
        </a>
        <button
          type="submit"
          className="submit-btn"
          onClick={() => {
            if (name["First Name"].length < 1 || name["Last Name"].length < 1) {
              alert("First and last name must be filled.");
            } else {
              setPersonsInfo((prevState) => ({
                ...prevState,
                [displayFrame]: { name: name, color: colorPref }, // Update specific frame
              }));

              setDisplayFrame(displayFrame + 1);
            }
          }}
        >
          {React.createElement(icon)}
        </button>
      </div>
    </form>
  );
}
