import styled from "styled-components";
import { color } from "../../styles/color";

interface PropsType {
  text?: string
}

export const Tag = ({ text }: PropsType) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}

const Container = styled.div`
  display: inline;
  padding: 4px 16px;
  border: 1px solid ${color.green800};
  border-radius: 8px;
`

const Text = styled.p`
  color: ${color.green200};
`