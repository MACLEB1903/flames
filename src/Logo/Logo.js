import LogoSVG from "../Assets/LogoSVG";
import "./logo.css";
export default function Logo() {
  return (
    <div className="flex-row logo-wrapper">
      <LogoSVG />
      <div className="game-name-wrapper">
        <h2 id="game-name">
          <span className="fla">fla</span>
          <span className="mes">mes</span>
        </h2>
      </div>
    </div>
  );
}
