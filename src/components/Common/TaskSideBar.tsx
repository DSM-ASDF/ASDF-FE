import styled from "styled-components";
import { Cancel, Dots } from "../../assets"
import { TaskList } from "./TaskList";
import { color } from "../../styles/color";
import { Comment } from "./Comment";
import { ChatInput } from "./ChatInput";
import { Font } from "../../styles/font";

export const TaskSideBar = () => {
  return (
    <Container>
      <CancelSettingWrap>
        <Cancel color={color.white} />
        <Dots color={color.white} />
      </CancelSettingWrap>

      <TaskWrap>
        <TaskDetailWrap>
          <Title placeholder="제목을 입력해주세요." />
          <ListWrap>
            <TaskList />
            <TaskList />
            <TaskList />
            <TaskList />
          </ListWrap>
        </TaskDetailWrap>
        <TaskDescription placeholder="상세 내용을 입력해주세요." />
      </TaskWrap>

      <CommentWrap>
        <Comment />
        <Comment />
        <ChatInput size={94} />
      </CommentWrap>
    </Container>
  )
}

const Container = styled.div`
  width: 530px;
  height: 100%;
  position: absolute;
  background-color: ${color.gray800};
`

const CancelSettingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`

const TaskWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  gap: 32px;
`

const Title = styled.input`
  border: none;
  outline: none;
  background-color: ${color.gray800};
  ${Font.medium[32]}
  color: ${color.white};

  &::placeholder {
    color: ${color.gray300};
  }
`

const TaskDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const TaskDescription = styled.textarea`
  border: none;
  outline: none;
  background-color: ${color.gray800};
  color: ${color.gray300};
`

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`