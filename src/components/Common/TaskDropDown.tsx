import styled from "styled-components";
import { Line } from "../../assets";
import { color } from "../../styles/color";
import { useState } from "react";

interface PropsType {
  title?: string,
  option?: readonly string[],
  onSelect?: (value: string) => void
}

export const TaskDropDown = ({ title, option = [], onSelect }: PropsType) => {
  const [select, setSelect] = useState(title);

  const handleSelect = (value: string) => {
    setSelect(value)
    if (onSelect) {
      onSelect(value)
    }
  }

  return (
    <DropDownContainer>
      <DropDownSelect>
        <Text>{select}</Text>
      </DropDownSelect>
      <OptionWrap>
        {option.map((value) => (
          value != "" ? (
            <ListWrap key={value} onClick={() => handleSelect(value)}>
              <Line size={16} color={color.white} />
              <Text>{value}</Text>
            </ListWrap>
          ) : null
        )
        )}
      </OptionWrap>
    </DropDownContainer >
  )
}

const DropDownContainer = styled.div`
  position: absolute;
  top: -2px;
  left: 90px;
  width: 380px;
  max-height: 280px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 8px;
  overflow: scroll;
  background-color: ${color.gray700};
  z-index: 100;
`

const DropDownSelect = styled.div`
  padding: 12px 16px;
  color: ${color.gray200};
  background-color: ${color.gray800};
`

const OptionWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const ListWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background-color: ${color.gray800};

  &:hover {
    background-color: ${color.gray700};
  }
`

const ProfileImage = styled.image`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${color.gray500};
`

const Text = styled.p`
  color: ${color.white};
`