import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";

export function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="tasks" element={<TasksPage />} />
    </Routes>
  );
}
