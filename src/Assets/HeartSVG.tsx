export default function HeartSVG({ fillColor = "#EA7095" }) {
  const effectiveFillColor = fillColor ?? "#EA7095";
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 22.5C30 10.0736 40.0736 0 52.5 0C64.9264 0 75 10.0736 75 22.5V75H30V22.5Z"
        fill={effectiveFillColor}
      />
      <path
        d="M75 30V75H22.5C10.0736 75 0 64.9264 0 52.5C0 40.0736 10.0736 30 22.5 30H75Z"
        fill={effectiveFillColor}
      />
    </svg>
  );
}
