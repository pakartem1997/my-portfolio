import { Route, Routes } from "react-router";

import './App.scss';
import Layout from "./components/Layout";
import { lazy } from "react";
import { ROUTES } from "./constants/routes";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const Projects = lazy(() => import("./pages/Projects/Projects").then(module => ({ default: module.Projects})));
const TodoApp = lazy(() => import("./projects/todoList/components/TodoApp").then(module => ({ default: module.TodoApp })));
const CalendarApp = lazy(() => import("./projects/calendar/components/CalendarApp").then(module => ({ default: module.CalendarApp })));
const SiteStack = lazy(() => import("./pages/SiteStack").then(module => ({ default: module.SiteStack })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PROJECT} element={<Projects />} />
        <Route path={ROUTES.TODO_LIST} element={<TodoApp/>} />
        <Route path={ROUTES.CALENDAR} element={<CalendarApp/>} />
        <Route path={ROUTES.SITESTACK} element={<SiteStack />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

