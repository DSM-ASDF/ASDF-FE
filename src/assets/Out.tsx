import { IconProps } from "./interface"

export const Out = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
      <path fill={color} d="M16.09 15.59 17.5 17l5-5-5-5-1.41 1.41L18.67 11H9v2h9.67l-2.58 2.59Z" />
    </svg>
  )
}