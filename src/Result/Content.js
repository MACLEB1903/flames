import { useRef } from "react";

import Header from "../Header/Header";
import HeartSVG from "../Assets/HeartSVG";
import PuzzleSVG from "../Assets/PuzzleSVG";
import Share from "../Assets/ShareSVG";
import Github from "../Assets/GithubSVG";
import Linkedin from "../Assets/LinkedinSVG";
import DownloadSVG from "../Assets/DownloadSVG";

import Person from "./Person";

export default function Content({ data, personsInfo }) {
  console.log(data, personsInfo);
  const { result, mainMessage, p1Name, p2Name, similar, p1Message, p2Message } =
    data;
  const svgFillColors = [personsInfo[1]?.color, personsInfo[2]?.color];

  const sectionRef = useRef(null);

  return (
    <>
      <section className="result-sec flex-col">
        <Header />
        <div className="flex-row result-title-wrapper">
          <div className="result-svg-wrapper">
            <HeartSVG fillColor={svgFillColors[0]} />
            <PuzzleSVG fillColor={svgFillColors[1]} />
          </div>
          <h1 className="result-title flex-col">
            <span>{result}.</span> <span>{mainMessage}</span>
          </h1>
        </div>

        <div className="flex-row person-result-wrapper">
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
            <Linkedin />
          </a>
          <button className="download-btn" /*onClick={handleDownload}*/>
            <DownloadSVG />
          </button>
        </div>
      </section>

      <section ref={sectionRef} className="image-section"></section>
    </>
  );
}
