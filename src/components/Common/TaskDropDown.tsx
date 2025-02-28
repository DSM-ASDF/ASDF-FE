import styled from "styled-components";
import { Line } from "../../assets";
import { color } from "../../styles/color";
import { useState } from "react";
import { MajorType, WorkAreaType, PriorityType } from "../../utils/Data/Task";

interface PropsType {
  title?: string,
  option?: readonly (MajorType | WorkAreaType | PriorityType)[],
  type?: "Assignee" | "Task"
}

export const TaskDropDown = ({ title, option = [], type = "Task" }: PropsType) => {
  const [select, setSelect] = useState(title);

  const handleSelect = (value: string) => {
    setSelect(value)
  }

  return (
    <DropDownContainer>
      <DropDownSelect>
        {type === "Assignee" ? (
          <></>
        ) : (
          <Text>{select}</Text>
        )}
      </DropDownSelect>
      <OptionWrap>
        {option.map((value) => (
          value != "" ? (
            <ListWrap key={value} onClick={() => handleSelect(value)}>
              {type === "Assignee" ? <ProfileImage /> : <Line size={16} color={color.white} />}
              <Text>{value}</Text>
            </ListWrap>
          ) : <></>
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