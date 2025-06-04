import { useEffect } from "react";
import { TodoListBody } from "./TodoList";
import { startTodoApp } from "../effector/event";
import { useUnit } from "effector-react";
import { TodoForm } from "./TodoForm";
import { Section } from "@/components/Section/Section";
import { Badge } from "react-bootstrap";
import { $countOfTasks } from "../effector/store";

export const TodoApp = () => {
  const [countOfTasks, startTodoAppFn] = useUnit([$countOfTasks, startTodoApp]);

  useEffect(() => {
    startTodoAppFn();
  }, [startTodoAppFn]);

  return (
    <Section>
      <Section.Header className="mb-3" backButton>
        <Section.Title>Todo List 📋</Section.Title>
        <Section.SideContent className="ms-auto fs-4">
          Количество задач: <Badge bg="secondary">{countOfTasks}</Badge>
        </Section.SideContent>
      </Section.Header>
      <Section.Body>
        <TodoForm />
        <TodoListBody />
      </Section.Body>
    </Section>
  );
};
