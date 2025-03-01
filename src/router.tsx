import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.style";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/login";
import { CalendarWithTask } from "./pages/CalendarWithTask";
import { Sprint } from "./pages/Sprint";
import { Layout } from "./components/Layout";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<CalendarWithTask />} />
        <Route element={<Layout />}>
          <Route path="/sprint" element={<Sprint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
