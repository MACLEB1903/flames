import React from "react";

export default function Person({
  personName,
  fillColor,
  message,
  similar,
  iconSVG,
}) {
  return (
    <div className="person-result">
      <div className="flex-row text-svg-wrapper">
        {React.createElement(iconSVG, { fillColor })}
        {message}
      </div>
      <NameDisplay
        personName={personName}
        fillColor={fillColor}
        similar={similar}
      />
    </div>
  );
}

const NameDisplay = ({ personName, fillColor, similar }) => {
  const trueFillColor = fillColor ?? "#2E4057";
  return (
    <div className="names-container">
      <div className="flex-row full-name">
        {personName.split(" ").map((name, index) => (
          <div key={index} className="flex-row name">
            {name.split("").map((letter, i) => (
              <h2
                key={i}
                className="letter"
                style={{
                  border: `2px solid ${trueFillColor}`,
                  background: similar.includes(letter)
                    ? trueFillColor
                    : "white",
                  color: similar.includes(letter) ? "white" : trueFillColor,
                }}
              >
                {letter}
              </h2>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
