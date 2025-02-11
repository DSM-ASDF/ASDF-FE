import { IconProps } from "./interface"

export const ArrowCircle = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 12 4-4m0 0 4 4m-4-4v8m0 6C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" />
    </svg>
  )
}