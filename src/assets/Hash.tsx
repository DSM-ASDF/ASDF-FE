import { IconProps } from "./interface";

export const Hash = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" d="m15.428 6.286-2.285 11.429M10.857 6.286 8.571 17.715m-1.143-8h10.286M6.286 14.286H16.57" />
    </svg>
  )
}