const ChevronRight = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
};

export default ChevronRight;
