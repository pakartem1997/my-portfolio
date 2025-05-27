import { Badge, Stack } from "react-bootstrap";
import { $countOfTasks } from "../effector/store";
import { useUnit } from "effector-react";
import { FC } from "react";

interface TodoListHeaderProps {
  className: string;
}

export const TodoListHeader: FC<TodoListHeaderProps> = ({ className }) => {
  const [countOfTasks] = useUnit([$countOfTasks]);

  return (
    <Stack className={className} direction="horizontal">
      <h2 className="m-0">Todo List 📋</h2>
      <div className="ms-auto fs-4">
        Количество задач: <Badge bg="secondary">{countOfTasks}</Badge>
      </div>
    </Stack>
  );
};
