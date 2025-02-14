import { IconProps } from "./interface";

export const Reset = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 21 21" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" d="M3.578 6.487A8 8 0 1 1 2.5 10.5" />
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" d="M7.5 6.5h-4v-4" />
    </svg>
  )
}