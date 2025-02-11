import { IconProps } from "./interface"

export const Cancel = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="m13.104 12.01 4.645-4.645a.788.788 0 1 0-1.114-1.114l-4.645 4.645-4.645-4.645A.788.788 0 0 0 6.23 7.365l4.645 4.645-4.645 4.646a.788.788 0 0 0 1.114 1.114l4.645-4.646 4.645 4.646a.788.788 0 0 0 1.114-1.114l-4.645-4.646Z" />
    </svg>
  )
}