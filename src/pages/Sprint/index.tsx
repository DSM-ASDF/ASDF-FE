import styled from "styled-components";
import { DropDown } from "../../components/Sprint/DropDown";
import { Plus, Reset } from "../../assets";
import { Todo } from "../../components/Sprint/Todo";
import { color } from "../../styles/color";

export const Sprint = () => {
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
        <TodoWrap>
          <TodoHeader>
            <TitleCount>
              <Title>모든 할 일</Title>
              <Title>(5)</Title>
            </TitleCount>
            <Plus color={color.gray200} />
          </TodoHeader>
          <TodoBody>
            <Todo />
            <Todo />
            <Todo />
          </TodoBody>
        </TodoWrap>
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