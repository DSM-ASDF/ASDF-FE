import styled from "styled-components";
import { Font } from "../../styles/font";
import { color } from "../../styles/color";

interface PropsType {
  title?: string,
  select?: string
}

export const TaskList = ({ title = "제목", select = "선택옵션" }: PropsType) => {
  return (
    <TaskListContainer>
      <Title>{title}</Title>
      <Select>{select}</Select>
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
  width: 100%;
  ${Font.regular[16]}
  color: ${color.gray300};
`