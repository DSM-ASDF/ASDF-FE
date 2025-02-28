import { useEffect, useState } from "react";
import styled from "styled-components";
import { DropDown } from "../../components/Sprint/DropDown";
import { Plus, Reset } from "../../assets";
import { Todo } from "../../components/Sprint/Todo";
import { color } from "../../styles/color";
import { TaskDummy } from "../../utils/dummy/TaskDummy"
import { TaskType, TodoType } from "../../utils/dummy/TaskDummy";

const TaskSection = ({ title, tasks }: { title: string, tasks: TaskType[] }) => {
  return (
    <TodoWrap>
      <TodoHeader>
        <TitleCount>
          <Title>{title}</Title>
          <Title>({tasks.length})</Title>
        </TitleCount>
        <Plus color={color.gray200} />
      </TodoHeader>
      <TodoBody>
        {tasks.flatMap((task: TaskType) => 
          task.todo.map((todo: TodoType) => (
            <Todo key={todo.todoId} task={todo} />
          ))
        )}
      </TodoBody>
    </TodoWrap>
  )
}

export const Sprint = () => {
  const [todayTasks, setTodayTasks] = useState<TaskType[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);
  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const filteredTasks = TaskDummy.filter(task => task.date === currentDate);
    const completed = TaskDummy.filter(task => 
      task.todo.some(todo => todo.progress)
    );
    setTodayTasks(filteredTasks);
    setCompletedTasks(completed);
  }, [currentDate]);

  return (
    <Container>
      <SearchWrap>
        <DropDownWrap>
          <DropDown />
          <DropDown />
          <DropDown />
        </DropDownWrap>
        <Reset size={18} color={color.white} />
      </SearchWrap>

      <Content>
        <TaskSection title="모든 할 일" tasks={TaskDummy} />
        <TaskSection title="오늘 할 일" tasks={todayTasks} />
        <TaskSection title="완료한 일" tasks={completedTasks} />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const DropDownWrap = styled.div`
  display: flex;
  gap: 20px;
`

const Content = styled.div`
  display: flex;
  gap: 20px;
`

const TodoWrap = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const TitleCount = styled.div`
  display: flex;
  gap: 4px;
`

const Title = styled.p`
  color: ${color.gray200};
`

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`