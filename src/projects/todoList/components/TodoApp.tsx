import { useEffect } from "react";
import { TodoListBody } from "./TodoList";
import { TodoListHeader } from "./TodoHeader";
import { startTodoApp } from "../effector/event";
import { useUnit } from "effector-react";
import { TodoForm } from "./TodoForm";

export const TodoApp = () => {
  const startTodoAppFn = useUnit(startTodoApp);

  useEffect(() => {
    startTodoAppFn();
  }, [startTodoAppFn]);

  return (
    <>
      <TodoListHeader className="mb-2"/>
      <TodoForm/>
      <TodoListBody />
    </>
  );
};
