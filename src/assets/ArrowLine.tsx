import { IconProps } from "./interface"

export const ArrowLine = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4m0 0 6 6m-6-6-6 6" />
    </svg>
  )
}