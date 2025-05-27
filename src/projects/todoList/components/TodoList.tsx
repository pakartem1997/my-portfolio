import { useEffect } from "react";
import { TodoListBody } from "./TodoListBody";
import { TodoListHeader } from "./TodoListHeader";
import { startTodoApp } from "../effector/event";
import { useUnit } from "effector-react";

export const TodoList = () => {
  const startTodoAppFn = useUnit(startTodoApp);

  useEffect(() => {
    startTodoAppFn();
  }, [startTodoAppFn]);

  return (
    <>
      <TodoListHeader />
      <TodoListBody />
    </>
  );
};
