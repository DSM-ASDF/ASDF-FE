import { color } from "../../styles/color";
import * as S from "./style";

interface ButtonProps {
  type: "green" | "gray";
  text: string;
  width: string;
}

export const Button = ({ type, text, width }: ButtonProps) => {
  const colors: Record<
    "green" | "gray",
    { backcolor: keyof typeof color; textcolor: keyof typeof color }
  > = {
    green: { backcolor: "green700", textcolor: "white" },
    gray: { backcolor: "gray700", textcolor: "gray300" },
  };

  return (
    <S.Container
      backcolor={colors[type].backcolor}
      textcolor={colors[type].textcolor}
      width={width}
    >
      {text}
    </S.Container>
  );
};
