import { useState } from "react";

import Form from "./Form";

import Heart from "../Assets/HeartSVG";
import Puzzle from "../Assets/PuzzleSVG";

const preferenceColors = ["#2f4156", "#8aaee0", "#eb7096", "#ebbac2"];
const preferenceColorsNames = [
  "dark-blue",
  "light-blue",
  "dark-pink",
  "light-pink",
];

export default function FlamesInfo({
  displayFrame,
  setDisplayFrame,
  setPersonsInfo,
}) {
  const displayMessage = {
    1: {
      title: "Let us know about you.",
      message:
        "Enter your first name, last name, and select your color pereference. Click the heart to save.",
      icon: Heart,
    },
    2: {
      title: "Let us know about your special someone.",
      message:
        "Enter the first name, last name, and select the color pereference. Click the puzzle to save.",
      icon: Puzzle,
    },
  };
  const [name, setName] = useState({
    "First Name": "",
    "Middle Name": "",
    "Last Name": "",
  });

  const [colorPref, setColorPref] = useState("#2f4156");

  return (
    <section className="home-container flex-col">
      <h1 className="home-title">{displayMessage[displayFrame]?.title}</h1>
      <p>{displayMessage[displayFrame]?.message}</p>

      <div className="color-wrapper flex-row">
        {preferenceColors.map((color, i) => (
          <div
            className={`${colorPref === color ? "active" : ""} ${
              preferenceColorsNames[i]
            } color`}
            key={color}
            style={{ background: color }}
            onClick={() => setColorPref(color)}
          ></div>
        ))}
      </div>
      <Form
        colorPref={colorPref}
        name={name}
        setName={setName}
        icon={displayMessage[displayFrame]?.icon}
        setPersonsInfo={setPersonsInfo}
        setDisplayFrame={setDisplayFrame}
        displayFrame={displayFrame}
      />
    </section>
  );
}
