import { useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";

import "./landing-page.css";

export default function LandingPage() {
  console.log("landing apge");
  const navigate = useNavigate();
  document.title = "flames by MARCEL";
  return (
    <section className="landing-page-sec flex-col">
      <Logo />
      <button onClick={() => navigate("/home")}>START</button>
    </section>
  );
}
