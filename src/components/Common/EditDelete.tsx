import styled from "styled-components";
import { color } from "../../styles/color";

export const EditDelete = () => {
  return (
    <Container>
      <ActionMenu>수정하기</ActionMenu>
      <Line />
      <ActionMenu>삭제하기</ActionMenu>
    </Container>
  )
}

const Container = styled.div`
  width: 150px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 12px;
  background-color: ${color.gray700};
`

const ActionMenu = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: ${color.gray300};
  background-color: ${color.gray700};

  &:hover {
    background-color: ${color.gray800};
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.gray600};
`