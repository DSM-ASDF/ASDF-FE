import { IconProps } from "./interface"

export const Exclamation = ({ size=24, color="#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 6.722v6.334M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Z" />
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.044 16.557h-.01" />
    </svg>
  )
}