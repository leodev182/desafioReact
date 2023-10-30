export const SocialButton = ({ viewBox, path }) => {
  return (
    <svg
      style={{
        height: "4em",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      <path d={path} />
    </svg>
  );
};
