import { useState } from "react"
import styled from "styled-components";
import { Arrow } from "../../assets";
import { color } from "../../styles/color";
import { Font } from "../../styles/Font";
import { MajorType, WorkAreaType, PriorityType } from "../../utils/Data/Task";
import { useDropDownStore } from "../../stores/useDropDownStore";

interface PropsType {
  title?: string,
  open?: boolean,
  options?: readonly string[],
  type?: 'Major' | 'WorkArea' | 'Priority'
}

export const DropDown = ({ title = "항목 선택", open = false, options = [], type }: PropsType) => {
  const {
    selectedMajor,
    selectedWorkArea,
    selectedPriority,
    setSelectedMajor,
    setSelectedWorkArea,
    setSelectedPriority
  } = useDropDownStore();

  let selectedValue: string;
  if (type === "Major") {
    selectedValue = selectedMajor || title;
  } else if (type === "WorkArea") {
    selectedValue = selectedWorkArea || title;
  } else if (type === "Priority") {
    selectedValue = selectedPriority || title;
  } else {
    selectedValue = title;
  }

  const [optionOpen, setOptionOpen] = useState<boolean>(open);

  const handleSelect = (option: string) => {
    setOptionOpen(false)

    if (type === "Major") {
      setSelectedMajor(option as MajorType);
    } else if (type === "WorkArea") {
      setSelectedWorkArea(option as WorkAreaType);
    } else if (type === "Priority") {
      setSelectedPriority(option as PriorityType);
    }
  }

  return (
    <Container>
      <DropDownSelect onClick={() => setOptionOpen(!optionOpen)}>
        <SelectText>{selectedValue}</SelectText>
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
  z-index: 1000;
`

const OptionSelect = styled.div`
  ${Font.regular[14]}
  padding: 8px 12px;
  color: ${color.gray200};
`

