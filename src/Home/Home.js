import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import Header from "../Header/Header";
import FlamesInfo from "./Flames";

import "./home.css";

export default function Home({ personsInfo, setPersonsInfo }) {
  window.scrollTo(0, 0);
  console.log("Home Page");
  const [displayFrame, setDisplayFrame] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (displayFrame === 1) {
      document.title = "flames | You";
    }
    if (displayFrame === 2) {
      document.title = "flames | Partner";
    }
    if (displayFrame === 3) {
      navigate("/result");
    }
  }, [displayFrame, navigate]);

  return (
    <>
      <Header />
      {displayFrame === 1 && (
        <FlamesInfo
          displayFrame={displayFrame}
          setDisplayFrame={setDisplayFrame}
          personsInfo={personsInfo}
          setPersonsInfo={setPersonsInfo}
        />
      )}

      {displayFrame === 2 && (
        <FlamesInfo
          displayFrame={displayFrame}
          setDisplayFrame={setDisplayFrame}
          personsInfo={personsInfo}
          setPersonsInfo={setPersonsInfo}
        />
      )}
    </>
  );
}
