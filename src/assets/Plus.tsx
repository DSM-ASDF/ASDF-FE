import { IconProps } from "./interface";

export const Plus = ({ size = 24, color = '#000', onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 12h6m0 0h6m-6 0V6m0 6v6" />
    </svg>
  )
}