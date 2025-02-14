import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/login";
import { CalendarWithTask } from "./pages/CalendarWithTask";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<CalendarWithTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
