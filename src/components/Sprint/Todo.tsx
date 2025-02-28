import styled from "styled-components";
import { Dots } from "../../assets";
import { Tag } from "./Tag";
import { color } from "../../styles/color";
import { Font } from "../../styles/font";

interface PropsType {
  title?: string,
  tag?: Array<string>,
  state?: boolean
}

export const Todo = ({ title, tag, state }: PropsType) => {
  return (
    <Container>
      <TitleSetting>
        <Title>{title}aa</Title>
        <Dots size={20} color={color.gray300} />
      </TitleSetting>
      <TagWrap>
        <Tag text="FrontEnd" type="Major" />
        <Tag text="버그" type="Function" />
        <Tag text="낮음" type="Importance" />
      </TagWrap>
      <StateProfile>
        <StateText>{state ? "완료됨" : "진행중"}</StateText>
        <Profile></Profile>
      </StateProfile>
    </Container>
  )
}

const Container = styled.div`
  width: 340px;
  display: inline;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 16px;
  gap: 12px;
  border: 1px solid ${color.green800};
  border-radius: 8px;
`

const TitleSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.p`
  color: ${color.white};
`

const TagWrap = styled.div`
  display: flex;
  gap: 4px;
`

const StateProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`

const StateText = styled.p`
  ${Font.medium[12]}
  color: ${color.gray300};
`

const Profile = styled.image`
  width: 24px;
  height: 24px;
  background-color: ${color.gray500};
  border-radius: 100%;
`