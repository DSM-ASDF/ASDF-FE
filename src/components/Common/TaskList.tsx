import { useState, useEffect } from "react";
import styled from "styled-components";
import { Font } from "../../styles/font";
import { color } from "../../styles/color";
import { TaskDropDown } from "./TaskDropDown";
import { Major, WorkArea, Priority } from "../../utils/Data/Task"

interface PropsType {
  title?: string,
  select?: string,
  manager?: { profile: string; userId: string },
  type?: 'label' | 'workArea' | 'priority'
}

export const TaskList = ({ title = "제목", select = "", type }: PropsType) => {
  const [selectedItem, setSelectedItem] = useState(select === "" ? `${title} 선택` : select);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    setSelectedItem(select === "" ? `${title} 선택` : select);
  }, [select, title]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const getOptions = () => {
    switch (type) {
      case "label":
        return Major;
      case "workArea":
        return WorkArea;
      case "priority":
        return Priority;
      default:
        return [];
    }
  };

  return (
    <Container>
      <TaskListContainer>
        <Title>{title}</Title>
        <Select onClick={toggleDropdown}>{selectedItem}</Select>
      </TaskListContainer>
      {isDropdownVisible && <TaskDropDown title={`${title} 선택`} option={getOptions()} />}
    </Container>
  )
}

export const TaskManagerList = ({ title = "제목", manager = { profile: "", userId: "" } }: PropsType) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <Container>
      <TaskListContainer>
        <Title>{title}</Title>
        <AssignerWrap onClick={toggleDropdown}>
          <Profile src={manager.profile || ""} />
          <Select>{manager.userId || "담당자 선택"}</Select>
        </AssignerWrap>
      </TaskListContainer>
      {isDropdownVisible && <TaskDropDown type="Assignee" />}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const TaskListContainer = styled.div`
  display: flex;
  padding: 8px;
`

const Title = styled.p`
  width: 100px;
  ${Font.regular[16]}
  color: ${color.gray300};
`

const Select = styled.p`
  ${Font.regular[16]}
  color: ${color.gray300};
`

const AssignerWrap = styled.div`
  display: flex;
  gap: 8px;
`

const Profile = styled.img<{ src: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  display: ${({ src }) => (src ? "block" : "none")};
`