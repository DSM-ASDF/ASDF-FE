import * as S from "./style";
import { LoginInput } from "../../components/LoginInput";
import { Button } from "../../components/Button";
import logo from "../../assets/svg/logo.svg";

const Text = [
  { type: "text", text: "이름", placeholder: "이름을 입력해주세요" },
  { type: "text", text: "이메일", placeholder: "이메일을 입력해주세요" },
  { type: "text", text: "아이디", placeholder: "아이디를 입력해주세요" },
  { type: "text", text: "비밀번호", placeholder: "비밀번호를 입력해주세요" },
  { type: "file", text: "프로필", placeholder: "파일을 업로드해주세요" },
] as const;

export const Signup = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.Logo src={logo} />
          <S.Title>Signup</S.Title>
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
        <S.TextWrapper>
          <S.Text>계정이 있다면?</S.Text>
          <S.Login>로그인 하러가기</S.Login>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <Button type="gray" text="뒤로가기" width="248px" />
          <Button type="green" text="회원가입" width="248px" />
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
