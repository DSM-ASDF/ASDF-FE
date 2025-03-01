import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { TaskSideBar } from "./Common/TaskSideBar";

export const Layout = () => {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
      <TaskPanelWrap>
        <TaskSideBar />
      </TaskPanelWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Content = styled.div``

const TaskPanelWrap = styled.div``