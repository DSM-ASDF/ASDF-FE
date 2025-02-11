import { QueryClientProvider, QueryClient } from "react-query";
import Router from "./router";
import "./styles/Font";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
