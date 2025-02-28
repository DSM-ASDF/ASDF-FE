import { useState } from "react"
import styled from "styled-components";
import { Arrow } from "../../assets";
import { color } from "../../styles/color";
import { Font } from "../../styles/font";

interface PropsType {
  title?: string,
  open?: boolean,
  options?: readonly string[];
}

export const DropDown = ({ title = "항목 선택", open = false, options = [] }: PropsType) => {
  const [select, setSelect] = useState<string>(title);
  const [optionOpen, setOptionOpen] = useState<boolean>(open);

  const handleSelect = (option: string) => {
    setSelect(option);
    setOptionOpen(false)
  }

  return (
    <Container>
      <DropDownSelect onClick={() => setOptionOpen(!optionOpen)}>
        <SelectText>{select}</SelectText>
        <Arrow color={color.gray200} rotate={optionOpen ? "top" : "bottom"} />
      </DropDownSelect>
      {
        optionOpen &&
        <OptionWrap>
          {
            options.map((option) => (
              <OptionSelect key={option} onClick={() => handleSelect(option)}>
                {option}
              </OptionSelect>
            ))
          }
        </OptionWrap>
      }
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  min-width: 140px;
`

const DropDownSelect = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
  gap: 20px;
  border-bottom: 1px solid ${color.gray200};
`

const SelectText = styled.p`
  color: ${color.gray200};
`

const OptionWrap = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${color.gray800};
`

const OptionSelect = styled.div`
  ${Font.regular[14]}
  padding: 8px 12px;
  color: ${color.gray200};
`

