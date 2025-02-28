import { useState, useEffect } from "react";
import styled from "styled-components";
import { Font } from "../../styles/font";
import { color } from "../../styles/color";
import { TaskDropDown } from "./TaskDropDown";
import { Major, WorkArea, Priority } from "../../utils/Data/Task"
import { useTaskStore } from "../../stores/useTaskStore";
import { TeamDummy, TeamMemberType } from "../../utils/dummy/TeamDummy";

interface PropsType {
  title?: string,
  select?: string,
  manager?: { profile: string; userId: number, userName: string },
  type?: 'label' | 'workArea' | 'priority'
}

export const TaskList = ({ title = "제목", select = "", type }: PropsType) => {
  const [selectedItem, setSelectedItem] = useState(select === "" ? `${title} 선택` : select);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const setSelectedLabel = useTaskStore((state) => state.setSelectedLabel);
  const setSelectedWorkArea = useTaskStore((state) => state.setSelectedWorkArea);
  const setSelectedPriority = useTaskStore((state) => state.setSelectedPriority);

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

  const handleSelectOption = (value: string) => {
    setSelectedItem(value);
    setIsDropdownVisible(false);

    if (type === "label") setSelectedLabel(value);
    else if (type === "workArea") setSelectedWorkArea(value);
    else if (type === "priority") setSelectedPriority(value);
  };

  return (
    <Container>
      <TaskListContainer>
        <Title>{title}</Title>
        <Select onClick={toggleDropdown}>{selectedItem}</Select>
      </TaskListContainer>
      {isDropdownVisible && <TaskDropDown title={`${title} 선택`} option={getOptions()} onSelect={handleSelectOption} />}
    </Container>
  )
}

export const TaskManagerList = ({ title = "제목", manager = { profile: "", userId: 0, userName: "" } }: PropsType) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const setSelectedManager = useTaskStore((state) => state.setSelectedManager);

  const [selectedManager, setSelectedManagerLocal] = useState<TeamMemberType>(manager);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleSelectManager = (userName: string) => {
    const selected = TeamDummy.find(member => member.userName === userName);
    if (selected) {
      setSelectedManager(selected);
      setSelectedManagerLocal(selected);
    }
    setIsDropdownVisible(false);
  };

  return (
    <Container>
      <TaskListContainer>
        <Title>{title}</Title>
        <AssignerWrap onClick={toggleDropdown}>
          <Profile src={selectedManager.profile || ""} />
          <Select>{selectedManager.userName || "담당자 선택"}</Select>
        </AssignerWrap>
      </TaskListContainer>
      {isDropdownVisible &&
        <TaskDropDown
          title="담당자 선택"
          option={TeamDummy.map(member => member.userName)}
          onSelect={handleSelectManager}
        />
      }
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