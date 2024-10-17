export default function Loading() {
  return (
    <div className="loader-container">
      <span className="loader" />
      <svg className="spinLogo" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          fill="none"
          stroke="var(--svg-stroke-color)" 
          strokeWidth="15"
        />
        <rect x="25" y="25" width="50" height="50" fill="var(--svg-fill-color)" /> {/* Use CSS variable for fill color */}
      </svg>
    </div>
  );
}
