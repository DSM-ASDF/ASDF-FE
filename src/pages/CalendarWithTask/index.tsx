import styled from "styled-components";
import { Plus } from "../../assets";
import { Tag } from "../../components/Calendar/Tag";
import { Todo } from "../../components/Calendar/Todo"
import { color } from "../../styles/color";
import { Calendar } from "./Calendar";

export const CalendarWithTask = () => {
  return (
    <Content>
      <Calendar />

      <Schedule>
        <TaskWrap>
          <TaskHeader>
            <Tag text="일정" />
            <Plus color={color.green200} />
          </TaskHeader>
          <Todo complete={true} text="아무글자" />
        </TaskWrap>

        <TaskWrap>
          <TaskHeader>
            <Tag text="모든 할 일" />
            <Plus color={color.green200} />
          </TaskHeader>
          <Todo complete={false} text="아무글자" />
          <Todo complete={true} text="아무글자" />
        </TaskWrap>
      </Schedule>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  gap: 80px;
`

const Schedule = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 52px;
`

const TaskWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
`