import styled from "styled-components"
import { Upload } from "../../assets"
import { color } from "../../styles/color"

interface PropsType {
  size?: number,
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export const ChatInput = ({ size = 100, value, onChange, onSubmit }: PropsType) => {
  return (
    <Container size={size}>
      <Input
        placeholder="댓글을 입력해주세요."
        value={value}
        onChange={onChange}
      />
      <IconWrap>
        <Upload color={color.green400} onClick={onSubmit} />
      </IconWrap>
    </Container>
  )
}

const Container = styled.div<{ size: number }>`
  position: absolute;
  bottom: 32px;
  width: ${({ size }) => `${size}%`};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 12px 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${color.gray700};
  color: ${color.gray200};
  
  &::placeholder {
    color: ${color.gray400};
  }
`

const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`