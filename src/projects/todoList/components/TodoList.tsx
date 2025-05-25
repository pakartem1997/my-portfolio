import { use, useEffect, useState } from "react";
import { TodoListBody } from "./TodoListBody";
import { TodoListHeader } from "./TodoListHeader";
import { useList, useUnit } from "effector-react";
import { $todos, fetchTodosFx } from "../effector/store";

type todos = {
  id: number;
  name: string;
  description: string;
  isChecked: boolean;
};

// const fetchData = fetch("http://localhost:3000/todos").then((r) => r.json());

export const TodoList = () => {
   const [isLogged, todos1] = useUnit([fetchTodosFx, $todos]);

   useEffect(() => {
    isLogged();
   }, [isLogged]);

  console.log(todos1);
  const data = todos1; // use(fetchData);
  const [todos, setTodos] = useState<todos[]>(data);

  function addTodo(name: string, description: string) {
    fetch(`http://localhost:3000/todos`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
        isChecked: false,
      }),
    })
      .then((response) => response.json())
      .then((todo) => setTodos((prev) => [...prev, todo]));
  }

  function deleteTodo(id: number) {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "delete",
    })
      .then((response) => {
        if (response.ok) {
          setTodos((prev) => prev.filter((todo) => todo.id !== id));
        }
      })
      .catch((error) => console.log(error));
  }

  function changeTodo(id: number, name: string, description: string) {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ name: name, description: description }),
    })
      .then((response) => response.json())
      .then((todo) =>
        setTodos((prev) => prev.map((obj) => (obj.id === todo.id ? todo : obj)))
      );
  }

  function toggleChecked(id: number, isChecked: boolean) {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ isChecked: !isChecked }),
    })
      .then((response) => response.json())
      .then((todo) =>
        setTodos((prev) => prev.map((obj) => (obj.id === todo.id ? todo : obj)))
      );
  }

  return (
    <>
      <TodoListHeader addTodo={addTodo} />
      <TodoListBody
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodo={changeTodo}
        toggleChecked={toggleChecked}
      />
    </>
  );
};
