import styled from "styled-components";
import { color } from "../../styles/color";
import { Font } from "../../styles/Font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InputTitle = styled.p`
  ${Font.medium[16]}
  color: ${color.gray200};
`;

export const Input = styled.input`
  width: 516px;
  height: 60px;
  ${Font.regular[16]}
  color: ${color.gray400};
  background-color: ${color.gray700};
`;
