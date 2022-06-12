const ChevronLeft = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
};

export default ChevronLeft;
