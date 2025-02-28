import { IconProps } from "./interface";

interface DotsProps extends IconProps {
  orientation?: "horizontal" | "vertical";
}

export const Dots = ({ size = 24, color = "#000", orientation = "horizontal", onClick }: DotsProps) => {
  const rotation = orientation === "vertical" ? "rotate(90deg)" : "rotate(0deg)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size}
      fill="none"
      viewBox="0 0 16 16"
      style={{ transform: rotation }}
      onClick={onClick}
    >
      <path
        fill={color}
        d="M8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 4.5A.75.75 0 1 0 8 3a.75.75 0 0 0 0 1.5Zm0 7A.75.75 0 1 0 8 13a.75.75 0 0 0 0-1.5Z"
      />
    </svg>
  )
} 