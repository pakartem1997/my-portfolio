import { Route, Routes } from "react-router";

import './App.scss';
import Layout from "./components/Layout";
import { ROUTES } from "./constants/routes";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects/Projects";
import { SiteStack } from "./pages/SiteStack";
import { NotFound } from "./pages/NotFound";
import { TodoList } from "./projects/todoList/components/TodoList";



function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PROJECT} element={<Projects />} />
        <Route path={ROUTES.TODO_LIST} element={<TodoList/>} />
        <Route path={ROUTES.SITESTACK} element={<SiteStack />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

