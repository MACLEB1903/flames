import { solveFlames } from "./solveFlames";

import "./result.css";

import Content from "./Content";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Result({ personsInfo }) {
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);
  document.title = "flames | Result";

  useEffect(() => {
    try {
      const data = solveFlames(personsInfo);
      console.log("Data received:", data);
      setResultData(data);
    } catch (e) {
      console.error("Error in solving flames", e);
      navigate("/");
    }
  }, [personsInfo, navigate]);

  if (!resultData) {
    navigate("/");
    return;
  }

  return <Content data={resultData} personsInfo={personsInfo} />;
}
