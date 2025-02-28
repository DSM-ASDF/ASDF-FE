import styled from "styled-components";
import { Cancel, Dots } from "../../assets"
import { TaskList, TaskManagerList } from "./TaskList";
import { color } from "../../styles/color";
import { Comment } from "./Comment";
import { ChatInput } from "./ChatInput";
import { Font } from "../../styles/font";
import { useTodoStore } from "../../stores/useTodoStore";
import { useState, useEffect } from "react";

export const TaskSideBar = () => {
  const {
    todoId,
    title: todoTitle,
    taskOwner,
    label,
    workArea,
    priority,
    description: todoDescription,
    comment
  } = useTodoStore((state) => state.todo);

  const [title, setTitle] = useState(todoTitle || "제목을 입력해주세요.");
  const [description, setDescription] = useState(todoDescription || "상세 내용을 입력해주세요.");

  useEffect(() => {
    setTitle(todoTitle || "제목을 입력해주세요.");
    setDescription(todoDescription || "상세 내용을 입력해주세요.");
  }, [todoTitle, todoDescription]);

  return (
    <Container>
      <CancelSettingWrap>
        <Cancel color={color.white} />
        <Dots color={color.white} />
      </CancelSettingWrap>

      <TaskWrap>
        <TaskDetailWrap>
          <Title value={title} onChange={(e) => setTitle(e.target.value)} />
          <ListWrap>
            <TaskManagerList title="담당자" manager={taskOwner} />
            <TaskList title="레이블" select={label} />
            <TaskList title="작업영역" select={workArea} />
            <TaskList title="우선순위" select={priority} />
          </ListWrap>
        </TaskDetailWrap>
        <TaskDescription value={description} onChange={(e) => setDescription(e.target.value)} />
      </TaskWrap>

      <CommentWrap>
        <CommentWrap>
          {comment.map((value) => (
            <Comment key={value.commentId} {...value} />
          ))}
          <ChatInput size={94} />
        </CommentWrap>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`