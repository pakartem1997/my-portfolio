import { FC } from "react";
import { TodoCard } from "./TodoCard";
import { useList } from "effector-react";
import { $todos } from "../effector/store";

type todos = {
  id: number;
  name: string;
  description: string;
  isChecked: boolean;
};

interface TodoListBodyProps {
  todos: todos[];
  deleteTodo: (id: number) => void;
  changeTodo: (id: number, name: string, description: string) => void;
  toggleChecked: (id: number, isChecked: boolean) => void;
}

export const TodoListBody: FC<TodoListBodyProps> = ({ todos, deleteTodo, changeTodo, toggleChecked }) => {
   const cards = useList($todos, (todo) => (
      <TodoCard todo={todo} deleteTodo={deleteTodo} changeTodo={changeTodo} toggleChecked={toggleChecked}/>
  ));

  return <div>{cards}</div>;

  // return (
  //   <div>
  //     {todos.map((todo) => (
  //       <TodoCard key={todo.id} todo={todo} deleteTodo={deleteTodo} changeTodo={changeTodo} toggleChecked={toggleChecked}/>
  //     ))}
  //   </div>
  // );
};
