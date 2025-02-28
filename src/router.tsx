import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { CalendarWithTask } from "./pages/CalendarWithTask";
import { Sprint } from "./pages/Sprint";
import { Layout } from "./components/Layout";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/calendar" element={<CalendarWithTask />} />
          <Route path="/sprint" element={<Sprint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
