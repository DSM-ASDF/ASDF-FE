import { IconProps } from "./interface";

export const Line = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick} >
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6 10h12M6 14h12" />
    </svg>
  )
}