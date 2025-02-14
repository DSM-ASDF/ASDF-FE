import { IconProps } from "./interface"

export const Sprint = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M11.182 18.727v1.637H4.636c-.9 0-1.636-.737-1.636-1.637V5.637A1.64 1.64 0 0 1 4.636 4h14.728c.9 0 1.636.736 1.636 1.636v6.628l-.164-.164c-.409-.41-.9-.655-1.472-.655V7.273H4.636v11.454h6.546Zm8.509-5.482 1.064 1.064a.498.498 0 0 1 0 .655l-.819.818-1.718-1.718.818-.819c.082-.081.164-.163.328-.163.163 0 .245.082.327.163Zm-.245 2.946-4.91 4.99h-1.718v-1.717l4.991-4.991 1.636 1.718Z" />
    </svg>
  )
}