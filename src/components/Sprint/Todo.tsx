import styled from "styled-components";
import { Dots } from "../../assets";
import { Tag } from "./Tag";
import { color } from "../../styles/color";
import { Font } from "../../styles/Font";
import { TodoType } from "../../utils/dummy/TaskDummy";
import { useTaskStore } from "../../stores/useTaskStore";
import { DeleteButton } from "../Common/DeleteButton";
import { useState } from "react";

export const Todo = ({ task }: { task: TodoType }) => {
  const { todoId, title, taskOwner, label, workArea, priority, progress } = task;

  const setSelectedTodoId = useTaskStore((state) => state.setSelectedTodoId)
  const setTodo = useTaskStore((state) => state.setTodo);
  const setSelectedManager = useTaskStore((state) => state.setSelectedManager);
  const setSelectedLabel = useTaskStore((state) => state.setSelectedLabel);
  const setSelectedWorkArea = useTaskStore((state) => state.setSelectedWorkArea);
  const setSelectedPriority = useTaskStore((state) => state.setSelectedPriority);

  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);

  const handleClick = () => {
    setSelectedTodoId(todoId);
    setTodo(task);
    setSelectedManager(taskOwner);
    setSelectedLabel(label);
    setSelectedWorkArea(workArea);
    setSelectedPriority(priority);
  };

  return (
    <Container onClick={handleClick}>
      <TitleSetting>
        <Title>{title}</Title>
        <Dots size={20} color={color.gray300} onClick={() => setDeleteVisible(!deleteVisible)} />
        {deleteVisible && <DeleteButton todoId={task.todoId} />}
      </TitleSetting>
      <TagWrap>
        <Tag text={label} type="Major" />
        <Tag text={workArea} type="Function" />
        <Tag text={priority} type="Importance" />
      </TagWrap>
      <StateProfile>
        <StateText>{progress ? "완료됨" : "진행중"}</StateText>
        <Profile src={taskOwner.profile} alt={taskOwner.userId} />
      </StateProfile>
    </Container>
  )
}

const Container = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 16px;
  gap: 8px;
  border: 1px solid ${color.green800};
  border-radius: 8px;
`

const TitleSetting = styled.div`
  position: relative;
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

const Profile = styled.img`
  width: 24px;
  height: 24px;
  background-color: ${color.gray500};
  border-radius: 50%;
  object-fit: cover;
`