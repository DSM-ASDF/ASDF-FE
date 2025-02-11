import { IconProps } from "./interface";

export const User = ({ size=24, color="#000", onClick}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M13.07 10.41a5 5 0 0 0 0-5.82A3.4 3.4 0 0 1 15 4a3.5 3.5 0 1 1 0 7 3.4 3.4 0 0 1-1.93-.59ZM5.5 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm2 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM16 17v2H2v-2s0-4 7-4 7 4 7 4Zm-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.322 5.322 0 0 1 18 17v2h4v-2s0-3.63-6.06-4h.01Z" />
    </svg>
  )
} 