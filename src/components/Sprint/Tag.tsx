import styled from "styled-components";
import { color } from "../../styles/color";
import { Font } from "../../styles/font";

interface PropsType {
  text?: string
  type?: 'Major' | 'Function' | 'Importance'
}

export const Tag = ({ text, type = 'Importance' }: PropsType) => {
  return (
    <Container type={type}>
      {text}
    </Container>
  )
}

const Container = styled.div<{ type?: 'Major' | 'Function' | 'Importance' }>`
  padding: 4px 12px;
  border-radius: 8px;
  ${Font.regular[12]}
  border: 1px solid ${({ type }) => type === 'Major' ? color.green200 : type === 'Function' ? color.blue : color.gray300};
  color: ${({ type }) => type === 'Major' ? color.green200 : type === 'Function' ? color.blue : color.gray300};
`