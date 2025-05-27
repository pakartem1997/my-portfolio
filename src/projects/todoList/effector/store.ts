import { createStore, restore } from "effector";
import { Todo } from "../types/todo";
import { addTodo, changeDescriptionTodo, changeTitleTodo, changeTodo, deleteTodo, startTodoApp, toggleCheckedTodo } from "./event";

export const $todos = restore<Todo[]>(startTodoApp, []);
export const $titleTodo = createStore<Todo["title"]>("");
export const $descriptionTodo = createStore<Todo["description"]>("");
export const $countOfTasks = $todos.map(todos => todos.length);

$titleTodo.on(changeTitleTodo, (_, title) => title).reset(addTodo);
$descriptionTodo.on(changeDescriptionTodo, (_, description) => description).reset(addTodo);

$todos.on(addTodo.doneData, (todos, todo) => [...todos, todo]);

$todos.on(deleteTodo.doneData, (todos, todo) =>
  todos.filter((t) => t.id !== todo.id)
);

$todos.on(changeTodo.doneData, (todos, todo) =>
  todos.map((t) => (t.id === todo.id ? todo : t))
);

$todos.on(toggleCheckedTodo.doneData, (todos, todo) =>
  todos.map((t) => (t.id === todo.id ? todo : t))
);