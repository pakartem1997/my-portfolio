import { createEffect, createEvent } from "effector";
import { Todo } from "../types/todo";
import { BASE_URL } from "@/constants/url";

export const changeTitleTodo = createEvent<Todo["title"]>();
export const changeDescriptionTodo = createEvent<Todo["description"]>();

export const startTodoApp = createEffect(async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Todos not found");
  }
  return response.json();
});

export const addTodo = createEffect(async ({ title, description }: Pick<Todo, 'title' | 'description'>) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      description: description,
      isChecked: false,
    }),
  })
  if (!response.ok) {
    throw new Error("Couldn't add todo");
  }
  return response.json();
});

export const changeTodo = createEffect(async ({ id, title, description }: Omit<Todo, 'isChecked'>) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title: title, description: description }),
  })
  if (!response.ok) {
    throw new Error("Couldn't change todo");
  }
  return response.json();
});

export const deleteTodo = createEffect(async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Couldn't delete todo");
  }
  return response.json();
});

export const toggleCheckedTodo = createEffect(async ({ id, isChecked }: Pick<Todo, 'id' | 'isChecked'>) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ isChecked: isChecked }),
  })
  if (!response.ok) {
    throw new Error("Couldn't patch todo");
  }
  return response.json();
});