import { IconProps } from "./interface";

const rotationAngles: { [key: string]: string } = {
  right: "180deg",
  top: "90deg",
  bottom: "-90deg",
  left: "0deg",
};

interface ArrowProps extends IconProps {
  rotate?: "top" | "bottom" | "left" | "right";
}

export const Arrow = ({ size = 24, color = "#000", onClick, rotate = "top" }: ArrowProps) => {
  const rotation = rotationAngles[rotate] || rotationAngles["top"];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation})` }}
      onClick={onClick}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m17 14-5-5-5 5"
      />
    </svg>
  );
};
