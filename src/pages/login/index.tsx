import * as S from "./style";
import { LoginInput } from "../../components/LoginInput";
import { Button } from "../../components/Button";
import logo from "../../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Text = [
  { type: "text", text: "아이디", placeholder: "아이디를 입력해주세요" },
  { type: "text", text: "비밀번호", placeholder: "비밀번호를 입력해주세요" },
] as const;

export const Login = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Wrapper isError={isError}>
        <S.LogoWrapper>
          <S.Logo src={logo} />
          <S.Title>Login</S.Title>
        </S.LogoWrapper>
        <S.InputWrapper>
          {Text.map(({ type, text, placeholder }) => (
            <LoginInput
              key={text}
              type={type}
              text={text}
              placeholder={placeholder}
            />
          ))}
        </S.InputWrapper>
        {isError && (
          <S.ErrorText>비밀번호 형식이 올바르지 않습니다.</S.ErrorText>
        )}
        <S.TextWrapper>
          <S.Text>계정이 없으시다면?</S.Text>
          <S.Login onClick={() => navigate("/")}>회원가입 하러가기</S.Login>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <Button type="gray" text="뒤로가기" width="248px" />
          <Button type="green" text="로그인" width="248px" />
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
