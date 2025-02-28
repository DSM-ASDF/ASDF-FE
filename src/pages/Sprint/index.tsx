import { useEffect, useState } from "react";
import styled from "styled-components";
import { DropDown } from "../../components/Sprint/DropDown";
import { Plus, Reset } from "../../assets";
import { Todo } from "../../components/Sprint/Todo";
import { color } from "../../styles/color";
import { TaskDummy } from "../../utils/dummy/TaskDummy"
import { TodoType } from "../../utils/dummy/TaskDummy";
import { Major, WorkArea, Priority } from "../../utils/Data/Task";
import { useDropDownStore } from "../../stores/useDropDownStore";

const TaskSection = ({ title, tasks }: { title: string, tasks: TodoType[] }) => {
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
        {tasks.map((todo) => (
          <Todo key={todo.todoId} task={todo} />
        ))}
      </TodoBody>
    </TodoWrap>
  )
}

export const Sprint = () => {
  const [allTasks, setAllTasks] = useState<TodoType[]>([]);
  const [todayTasks, setTodayTasks] = useState<TodoType[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TodoType[]>([]);

  const { selectedMajor, selectedWorkArea, selectedPriority } = useDropDownStore();

  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const allTodo = TaskDummy.flatMap(task => task.todo);
    const todayTodo = TaskDummy.filter(task => task.date === currentDate).flatMap(task => task.todo);
    const completedTodo = todayTodo.filter(todo => todo.progress);

    const filteredAllTasks = allTodo.filter(task => 
      (selectedMajor ? task.label === selectedMajor : true) &&
      (selectedWorkArea ? task.workArea === selectedWorkArea : true) &&
      (selectedPriority ? task.priority === selectedPriority : true)
    );

    const filteredTodayTasks = todayTodo.filter(task =>
      (selectedMajor ? task.label === selectedMajor : true) &&
      (selectedWorkArea ? task.workArea === selectedWorkArea : true) &&
      (selectedPriority ? task.priority === selectedPriority : true)
    );

    const filteredCompletedTasks = completedTodo.filter(task =>
      (selectedMajor ? task.label === selectedMajor : true) &&
      (selectedWorkArea ? task.workArea === selectedWorkArea : true) &&
      (selectedPriority ? task.priority === selectedPriority : true)
    );

    setAllTasks(filteredAllTasks);
    setTodayTasks(filteredTodayTasks);
    setCompletedTasks(filteredCompletedTasks);
  }, [currentDate, selectedMajor, selectedWorkArea, selectedPriority]);

  return (
    <Container>
      <SearchWrap>
        <DropDownWrap>
          <DropDown title="레이블 선택" options={Major} type="Major"/>
          <DropDown title="작업 영역 선택" options={WorkArea} type="WorkArea" />
          <DropDown title="우선순위 선택" options={Priority} type="Priority" />
        </DropDownWrap>
        <Reset size={18} color={color.white} />
      </SearchWrap>

      <Content>
        <TaskSection title="모든 할 일" tasks={allTasks} />
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