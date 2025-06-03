import { Badge, Button, Stack } from "react-bootstrap";
import { $countOfTasks } from "../effector/store";
import { useUnit } from "effector-react";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

interface TodoListHeaderProps {
  className?: string;
}

export const TodoListHeader: FC<TodoListHeaderProps> = ({ className }) => {
  const [countOfTasks] = useUnit([$countOfTasks]);
  const navigate = useNavigate();
  
  return (
    <Stack className={className} direction="horizontal">
      <Button onClick={() => {
        navigate(-1);
      }} className="rounded-circle me-2 p-2 d-flex justify-content-center align-items-center" variant="outline-secondary">
        <FaArrowLeft />
      </Button>
      <h2 className="m-0">Todo List 📋</h2>
      <div className="ms-auto fs-4">
        Количество задач: <Badge bg="secondary">{countOfTasks}</Badge>
      </div>
    </Stack>
  );
};
