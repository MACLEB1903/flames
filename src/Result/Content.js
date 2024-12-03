import { useRef } from "react";
import { toPng } from "html-to-image";

import Header from "../Header/Header";
import HeartSVG from "../Assets/HeartSVG";
import PuzzleSVG from "../Assets/PuzzleSVG";
import Share from "../Assets/ShareSVG";
import Github from "../Assets/GithubSVG";
import Linkedin from "../Assets/LinkedinSVG";
import DownloadSVG from "../Assets/DownloadSVG";

import Person from "./Person";
import Image from "../Image/Image";

export default function Content({ data, personsInfo }) {
  const { result, mainMessage, p1Name, p2Name, similar, p1Message, p2Message } =
    data;
  const svgFillColors = [personsInfo[1]?.color, personsInfo[2]?.color];

  const sectionRef = useRef(null);

  const handleDownload = () => {
    if (sectionRef.current) {
      sectionRef.current.style.display = "block";
      setTimeout(() => {
        const originalHeight = sectionRef.current.style.height;
        sectionRef.current.style.height =
          sectionRef.current.offsetHeight * 1 + "px";

        toPng(sectionRef.current)
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "flames.png";
            link.click();
          })
          .catch(console.error)
          .finally(() => {
            sectionRef.current.style.height = originalHeight;
            sectionRef.current.style.display = "none";
          });
      }, 500);
    }
  };

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
          <button className="download-btn" onClick={handleDownload}>
            <DownloadSVG />
          </button>
        </div>
      </section>

      <section ref={sectionRef} className="image-section">
        <Image personsInfo={personsInfo} />
      </section>
    </>
  );
}
