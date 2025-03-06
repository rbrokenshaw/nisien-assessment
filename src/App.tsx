import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { LayoutTemplate } from "./components/layout-template";
import { UserProvider } from "./context/user-context";
import { AddTeamMember } from "./pages/add-team-member";
import { CreateDrinksRun } from "./pages/create-drinks-run";
import { DrinksRun } from "./pages/drinks-run";
import { DrinksRunHistory } from "./pages/drinks-run-history";
import { EditTeamMember } from "./pages/edit-team-member";
import { Home } from "./pages/home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <LayoutTemplate>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-team-member" element={<AddTeamMember />} />
              <Route
                path="/edit-team-member/:id"
                element={<EditTeamMember />}
              />
              <Route path="/create-drinks-run" element={<CreateDrinksRun />} />
              <Route path="/drink-run-history" element={<DrinksRunHistory />} />
              <Route path="/drink-run/:id" element={<DrinksRun />} />
            </Routes>
          </LayoutTemplate>
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
