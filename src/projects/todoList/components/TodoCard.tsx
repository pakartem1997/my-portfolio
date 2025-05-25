import clsx from "clsx";
import { FC, useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { FaPen, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type todos = {
  id: number;
  name: string;
  description: string;
  isChecked: boolean;
};

interface TodoListBodyProps {
  todo: todos;
  deleteTodo: (id: number) => void;
  changeTodo: (id: number, name: string, description: string) => void;
  toggleChecked: (id: number, isChecked: boolean) => void;
}

export const TodoCard: FC<TodoListBodyProps> = ({
  todo,
  deleteTodo,
  changeTodo,
  toggleChecked,
}) => {
  const [isChange, setIsChange] = useState<boolean>(false);
  const [value, setValue] = useState({
    name: todo.name,
    description: todo.description,
  });

  function handleChangeTodo(id: number) {
    setIsChange(false);
    changeTodo(id, value.name, value.description);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name);
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <Card className="mt-2 w-100" style={{ width: "18rem" }}>
      <Card.Body>
        {isChange ? (
          <Stack direction="horizontal">
            <Stack>
              <input
                className="form-control w-25 mb-1"
                value={value.name}
                onChange={onChange}
                name="name"
              />
              <input
                className="form-control w-25"
                value={value.description}
                onChange={onChange}
                name="description"
              />
            </Stack>
            <Button
              variant="secondary"
              onClick={() => handleChangeTodo(todo.id)}
            >
              <FaSave />
            </Button>
          </Stack>
        ) : (
          <Stack direction="horizontal">
            <Stack>
              <Stack
                className="align-items-center"
                direction="horizontal"
                gap={2}
              >
                <input
                  className="form-check-input m-0"
                  type="checkbox"
                  checked={todo.isChecked}
                  onChange={() => toggleChecked(todo.id, todo.isChecked)}
                />
                <Card.Title
                  className={clsx(
                    {
                      "text-decoration-line-through text-muted": todo.isChecked,
                    },
                    "m-0"
                  )}
                >
                  {todo.name}
                </Card.Title>
              </Stack>
              <Card.Text className={clsx({ "text-muted": todo.isChecked })}>
                {todo.description}
              </Card.Text>
            </Stack>
            <Stack className="ms-auto" direction="horizontal" gap={1}>
              <Button variant="secondary" onClick={() => setIsChange(true)}>
                <FaPen />
              </Button>
              <Button variant="secondary" onClick={() => deleteTodo(todo.id)}>
                <MdDelete />
              </Button>
            </Stack>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
};
