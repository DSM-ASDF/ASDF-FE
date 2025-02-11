import { IconProps } from "./interface"

export const Dash = ({ size = 24, color = '#000', onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 16 16" onClick={onClick}>
      <path fill={color} fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" clip-rule="evenodd" />
    </svg>
  )
}