import { FC, useState } from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";

type Todo = {
  id: number;
  name: string;
  description: string;
  isChecked: boolean;
};

interface TodoListHeaderProps {
  addTodo: (name: string, description: string) => void;
}

export const TodoListHeader: FC<TodoListHeaderProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: "", description: "" });

  function onChange(e: React.ChangeEvent<HTMLInputElement >) {
    console.log(e.target.name)
    setTodo(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  function onClick() {
    addTodo(todo.title, todo.description);
    setTodo({ title: "", description: "" });
  }

  return (
    <div>
      <h2>Todo List 📋</h2>
      <Form>
        <InputGroup className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Заголовок">
            <Form.Control placeholder="Заголовок" name="title" value={todo.title} onChange={onChange}/>
          </FloatingLabel>
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => onClick()}
          >
            Добавить
          </Button>
        </InputGroup>
        <FloatingLabel controlId="floatingTextarea2" label="Описание">
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Leave a comment here"
            style={{ height: "100px", resize: "none" }}
            value={todo.description}
            onChange={onChange}
          />
        </FloatingLabel>
      </Form>
    </div>
  );
};
