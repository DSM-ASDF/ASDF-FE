import styled from "styled-components";
import { color } from "../../styles/color";
import { Font } from "../../styles/Font";
import background from "../../assets/png/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 581px;
  height: 564px;
  padding: 48px 32px;
  border: solid 1px ${color.success};
  border-radius: 20px;
  background-color: ${color.gray800};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

export const Title = styled.p`
  ${Font.semi[32]}
  color: ${color.green400};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-self: flex-start;
`;

export const Text = styled.p`
  ${Font.medium[16]}
  color: ${color.gray300};
`;

export const Login = styled.p`
  ${Font.medium[16]}
  color: ${color.gray100};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
