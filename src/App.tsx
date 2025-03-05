import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { LayoutTemplate } from "./components/layout-template";
import { AddTeamMember } from "./pages/add-team-member";
import { Home } from "./pages/home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LayoutTemplate>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-team-member" element={<AddTeamMember />} />
          </Routes>
        </LayoutTemplate>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
