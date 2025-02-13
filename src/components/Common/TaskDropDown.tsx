import styled from "styled-components";
import { Line } from "../../assets";
import { color } from "../../styles/color";

interface PropsType {
  title?: string,
  option?: Array<string>,
  type?: "Assignee" | "Task"
}

export const TaskDropDown = ({ title, option = [], type = "Task" }: PropsType) => {
  return (
    <DropDownContainer>
      <DropDownSelect>
        {type === "Assignee" ? (
          <></>
        ) : (
          <Text>{title} 선택</Text>
        )}
      </DropDownSelect>
      <OptionWrap>
        {option.map((value) => (
          <ListWrap key={value}>
            {type === "Assignee" ? <ProfileImage /> : <Line size={16} color={color.white} />}
            <Text>{value}</Text>
          </ListWrap>
        )
        )}
      </OptionWrap>
    </DropDownContainer >
  )
}

const DropDownContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${color.gray700};
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
  padding: 2px 16px;
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