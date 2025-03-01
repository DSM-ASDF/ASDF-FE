import styled from "styled-components";
import { color } from "../../styles/color";
import { Font } from "../../styles/font";
import { useTaskStore } from "../../stores/useTaskStore";

export const DeleteButton = ({ todoId }: { todoId: number }) => {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  
  const handleDelete = () => {
    deleteTask(todoId);
  };

  return (
    <DeleteButtonContainer onClick={handleDelete}>삭제하기</DeleteButtonContainer>
  )
}

const DeleteButtonContainer = styled.button`
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: ${color.gray300};
  background-color: ${color.gray800};
  
  ${Font.regular[12]}

  &:hover {
    background-color: ${color.gray800};
  }
`