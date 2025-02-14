import { IconProps } from "./interface";

export const Link = ({ size=24, color="#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="m7.05 11.293-2.12 2.12a4 4 0 0 0 5.657 5.658l2.828-2.828a3.998 3.998 0 0 0 0-5.657l-1.06 1.06a2.5 2.5 0 0 1 0 3.536l-2.83 2.828a2.5 2.5 0 0 1-3.535-3.535l2.12-2.121-1.06-1.061Z" />
      <path fill={color} d="m15.889 11.646 2.121-2.12a2.5 2.5 0 0 0-3.535-3.536l-2.829 2.828a2.497 2.497 0 0 0 0 3.536l-1.06 1.06a4 4 0 0 1 0-5.657l2.828-2.828a4 4 0 1 1 5.657 5.657l-2.121 2.121-1.061-1.06Z" />
    </svg>
  )
}