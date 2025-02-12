import { QueryClientProvider, QueryClient } from "react-query";
import Router from "./router";
import "./styles/font"
import { CalendarProvider } from "./pages/CalendarWithTask/useCalendarContext";

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CalendarProvider>
        <Router />
      </CalendarProvider>
    </QueryClientProvider>
  )

}

export default App;
