import { TodoCard } from "./TodoCard";
import { useList } from "effector-react";
import { $todos } from "../effector/store";

export const TodoListBody = () => {
  const cards = useList($todos, (todo) => <TodoCard todo={todo} />);
  return <div>{cards}</div>;
};
