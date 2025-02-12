import styled from "styled-components";
import { Check } from "../../assets";
import { color } from "../../styles/color";

interface PropsType {
  complete?: boolean,
  text?: string
}

export const Todo = ({ complete = false, text }: PropsType) => {
  return (
    <Container>
      <Check color={complete ? color.green200 : color.gray700} />
      <Text>{text}</Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  gap: 8px;
`

const Text = styled.p`
  color: ${color.white};
`