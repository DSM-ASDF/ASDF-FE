import styled from "styled-components";
import { Cancel, Dots } from "../../assets"
import { TaskList, TaskManagerList } from "./TaskList";
import { color } from "../../styles/color";
import { Comment } from "./Comment";
import { ChatInput } from "./ChatInput";
import { Font } from "../../styles/font";
import { useState, useEffect } from "react";
import { useTaskStore } from "../../stores/useTaskStore";

export const TaskSideBar = () => {
  const {
    tasks,
    selectedTodoId,
    setTodo,
    createTodo,
    selectedLabel,
    selectedWorkArea,
    selectedPriority,
    selectedManager,
    addComment
  } = useTaskStore();

  const selectedTask = tasks.find((task) =>
    task.todo.some((t) => t.todoId === selectedTodoId)
  );
  const selectedTodo = selectedTask?.todo.find((t) => t.todoId === selectedTodoId);

  const [title, setTitle] = useState(selectedTodo?.title || "제목을 입력해주세요.");
  const [description, setDescription] = useState(selectedTodo?.description || "상세 내용을 입력해주세요.");
  const [commentInput, setCommentInput] = useState('');

  const isEditMode = !!selectedTodo;

  useEffect(() => {
    if (isEditMode) {
      setTitle(selectedTodo?.title || "제목을 입력해주세요.");
      setDescription(selectedTodo?.description || "상세 내용을 입력해주세요.");
    }
  }, [selectedTodo, isEditMode]);

  useEffect(() => {
    if (isEditMode && selectedTodo) {
      setTodo({
        todoId: selectedTodo.todoId,
        title,
        description,
      });
    }
  }, [title, description]);

  const handleCreateTodo = () => {
    if (!selectedManager) {
      alert("담당자를 선택해주세요.");
      return;
    }

    try {
      createTodo(
        {
          todoId: Date.now(),
          title,
          taskOwner: {
            profile: selectedManager.profile,
            userId: selectedManager.userId
          },
          label: selectedLabel,
          workArea: selectedWorkArea,
          priority: selectedPriority,
          description,
          progress: false,
          comment: [],
        },
        new Date().toISOString().split("T")[0]
      );
    } catch (error) {
      console.error('할 일을 생성하는 도중 오류가 발생하였습니다.', error);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(e.target.value);
  };

  const handleAddComment = () => {
    if (commentInput.trim() === '') return;

    if (selectedTodoId !== null) {
      addComment(selectedTodoId, commentInput);
      setCommentInput('');
    }
    setCommentInput('');
  };

  return (
    <Container>
      <CancelSettingWrap>
        <Cancel color={color.white} />
        <Dots color={color.white} orientation="vertical" />
      </CancelSettingWrap>

      <TaskWrap>
        <TaskDetailWrap>
          <Title value={title} onChange={(e) => setTitle(e.target.value)} />
          <ListWrap>
            <TaskManagerList title="담당자" manager={selectedTodo?.taskOwner} />
            <TaskList title="레이블" select={selectedTodo?.label} type="label" />
            <TaskList title="작업영역" select={selectedTodo?.workArea} type="workArea" />
            <TaskList title="우선순위" select={selectedTodo?.priority} type="priority" />
          </ListWrap>
        </TaskDetailWrap>
        <TaskDescription value={description} onChange={(e) => setDescription(e.target.value)} />
      </TaskWrap>

      <CommentWrap>
        <CommentWrap>
          {selectedTodo?.comment.map((value) => (
            <Comment key={value.commentId} {...value} />
          ))}
        </CommentWrap>
        {
          isEditMode ? (
            <ChatInput
              size={94}
              value={commentInput}
              onChange={handleCommentChange}
              onSubmit={handleAddComment}
            />
          ) : (
            <Button onClick={handleCreateTodo}>할 일 업로드</Button>
          )
        }
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
  gap: 52px;
`

const Title = styled.input`
  border: none;
  outline: none;
  background-color: ${color.gray800};
  ${Font.medium[36]}
  color: ${color.white};

  &::placeholder {
    color: ${color.gray300};
  }
`

const TaskDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const Button = styled.button`
  position: absolute;
  bottom: 32px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${color.green300};
  background-color: ${color.gray700};
  color: ${color.gray300};
`