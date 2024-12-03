import { solveFlames } from "../Result/solveFlames";

import HeartSVG from "../Assets/HeartSVG";
import PuzzleSVG from "../Assets/PuzzleSVG";
import Person from "../Result/Person";
import LogoSVG from "../Assets/LogoSVG";

import "./image.css";

export default function Image({ personsInfo }) {
  const { result, mainMessage, p1Name, p2Name, similar, p1Message, p2Message } =
    solveFlames(personsInfo);
  const svgFillColors = [personsInfo[1]?.color, personsInfo[2]?.color];

  return (
    <div className="downloadable-container">
      <div className="flex-row result-title-wrapper">
        <div className="result-svg-wrapper">
          <HeartSVG fillColor={svgFillColors[0]} />
          <PuzzleSVG fillColor={svgFillColors[1]} />
        </div>
        <h1 className="result-title flex-col">
          <span>{result}.</span> <span>{mainMessage}</span>
        </h1>
      </div>
      <div className="flex-col person-result-wrapper">
        <Person
          personName={p1Name}
          fillColor={svgFillColors[0]}
          message={p1Message}
          similar={similar}
          iconSVG={HeartSVG}
        />
        <Person
          personName={p2Name}
          fillColor={svgFillColors[1]}
          message={p2Message}
          similar={similar}
          iconSVG={PuzzleSVG}
        />

        <div className="credits">
          <div className="credits-wrapper flex-row">
            <LogoSVG />
            <p>
              by <b>MARCEL</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
