export default function PuzzleSVG({ fillColor = "#2E4057" }) {
  const effectiveFillColor = fillColor ?? "#2E4057";
  return (
    <svg
      width="45"
      height="58"
      viewBox="0 0 45 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45 13H0V28H5C9.41828 28 13 31.5817 13 36C13 40.4183 9.41828 44 5 44H0V58H15V53C15 48.5817 18.5817 45 23 45C27.4183 45 31 48.5817 31 53V58H45V13Z"
        fill={effectiveFillColor}
      />
      <path
        d="M13 8C13 3.58172 16.5817 0 21 0C25.4183 0 29 3.58172 29 8V13H13V8Z"
        fill={effectiveFillColor}
      />
    </svg>
  );
}
