import styled from "styled-components";
import { color } from "../../styles/color";

export const Container = styled.button<{
  backcolor: keyof typeof color;
  textcolor: keyof typeof color;
}>`
  background-color: ${({ backcolor }) => color[backcolor]};
  color: ${({ textcolor }) => color[textcolor]};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
`;
