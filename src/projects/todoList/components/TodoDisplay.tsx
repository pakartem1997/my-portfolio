import clsx from "clsx";
import { Button, Card, Stack } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Todo } from "../types/todo";
import { FC } from "react";
import { useUnit } from "effector-react";
import { deleteTodo, toggleCheckedTodo } from "../effector/event";

interface TodoDisplayProps {
  todo: Todo;
  startEdit: () => void;
}

export const TodoDisplay: FC<TodoDisplayProps> = ({ todo, startEdit }) => {
  const [deleteTodoFn, toggleCheckedTodoFn] = useUnit([
    deleteTodo,
    toggleCheckedTodo
  ]);

  return (
    <Stack direction="horizontal">
      <Stack>
        <Stack className="align-items-center" direction="horizontal" gap={2}>
          <input
            className="form-check-input m-0"
            type="checkbox"
            checked={todo.isChecked}
            onChange={() =>
              toggleCheckedTodoFn({
                id: todo.id,
                isChecked: !todo.isChecked,
              })
            }
          />
          <Card.Title
            className={clsx(
              {
                "text-decoration-line-through text-muted": todo.isChecked,
              },
              "m-0"
            )}
          >
            {todo.title}
          </Card.Title>
        </Stack>
        <Card.Text className={clsx({ "text-muted": todo.isChecked })}>
          {todo.description}
        </Card.Text>
      </Stack>
      <Stack className="ms-auto" direction="horizontal" gap={1}>
        <Button variant="secondary" onClick={() => startEdit()}>
          <FaPen />
        </Button>
        <Button variant="secondary" onClick={() => deleteTodoFn(todo.id)}>
          <MdDelete />
        </Button>
      </Stack>
    </Stack>
  );
};
