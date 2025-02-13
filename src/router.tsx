import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { CalendarWithTask } from "./pages/CalendarWithTask";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/calendar" element={<CalendarWithTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
