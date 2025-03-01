import styled from "styled-components";
import { color } from "../../styles/color";

export const SchedulePicker = () => {

  const handleToday = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <Container>
      <Option onClick={handleToday}>오늘 할 일</Option>
      <Option onClick={handleComplete}>완료한 일</Option>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 52px;
  right: 8px;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  border-radius: 12px;
  border: 1px solid ${color.gray600};
  background-color: ${color.gray700};
  overflow: hidden;
`

const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: ${color.gray300};
  background-color: ${color.gray800};
`