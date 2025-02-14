import styled from "styled-components";
import { color } from "../../styles/color";
import { Font } from "../../styles/Font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputTitle = styled.p`
  ${Font.medium[16]}
  color: ${color.gray200};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${color.gray500};
  border-radius: 8px;
  background-color: ${color.gray700};
  color: ${color.gray100};

  &::placeholder {
    color: ${color.gray400};
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  width: 516px;
  padding: 12px;
  font-size: 16px;
  color: ${color.gray400};
  background-color: ${color.gray700};
  border: 1px solid ${color.gray500};
  border-radius: 8px;
  text-align: start;
  cursor: pointer;
`;
