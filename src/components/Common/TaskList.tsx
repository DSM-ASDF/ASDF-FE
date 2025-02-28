import styled from "styled-components";
import { Font } from "../../styles/font";
import { color } from "../../styles/color";

interface PropsType {
  title?: string,
  select?: string,
  manager?: { profile: string; userId: string };
}

export const TaskList = ({ title = "제목", select = "선택옵션" }: PropsType) => {
  return (
    <TaskListContainer>
      <Title>{title}</Title>
      <Select>{select}</Select>
    </TaskListContainer>
  )
}

export const TaskManagerList = ({ title = "제목", manager = { profile: "", userId: "" } }: PropsType) => {
  return (
    <TaskListContainer>
      <Title>{title}</Title>
      <AssignerWrap>
        <Profile src={manager.profile} />
        <Select>{manager.userId}</Select>
      </AssignerWrap>
    </TaskListContainer>
  )
}

const TaskListContainer = styled.div`
  display: flex;
  padding: 8px;
`

const Title = styled.p`
  width: 100px;
  ${Font.regular[16]}
  color: ${color.gray300};
`

const Select = styled.p`
  ${Font.regular[16]}
  color: ${color.gray300};
`

const AssignerWrap = styled.div`
  display: flex;
  gap: 8px;
`

const Profile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`