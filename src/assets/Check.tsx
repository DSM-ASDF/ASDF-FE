import { IconProps } from "./interface"

export const Check = ({ size = 24, color = '#000', onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" d="M20 7 10 17l-5-5" />
    </svg>
  )
}