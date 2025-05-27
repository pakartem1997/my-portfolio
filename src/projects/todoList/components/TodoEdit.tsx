import { FC, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { Todo } from "../types/todo";
import { useUnit } from "effector-react";
import { changeTodo } from "../effector/event";

interface TodoEditProps {
  todo: Todo;
  finishEdit: () => void;
}

export const TodoEdit: FC<TodoEditProps> = ({ todo, finishEdit }) => {
  const changeTodoFn = useUnit(changeTodo);

  const [value, setValue] = useState({
    title: todo.title,
    description: todo.description,
  });

  function handleSaveTodo(id: number) {
    changeTodoFn({ id, title: value.title, description: value.description });
    finishEdit();
  }

  function handleChangeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <Stack direction="horizontal">
      <Stack>
        <input
          className="form-control w-25 mb-1"
          value={value.title}
          onChange={handleChangeTodo}
          name="title"
        />
        <input
          className="form-control w-25"
          value={value.description}
          onChange={handleChangeTodo}
          name="description"
        />
      </Stack>
      <Button variant="secondary" onClick={() => handleSaveTodo(todo.id)}>
        <FaSave />
      </Button>
    </Stack>
  );
};
