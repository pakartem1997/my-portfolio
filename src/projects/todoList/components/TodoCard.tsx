import { FC, useState } from "react";
import { Card } from "react-bootstrap";
import { Todo } from "../types/todo";
import { TodoEdit } from "./TodoEdit";
import { TodoDisplay } from "./TodoDisplay";

interface TodoListBodyProps {
  todo: Todo;
}

export const TodoCard: FC<TodoListBodyProps> = ({ todo }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  function startEdit() {
    setIsEdit(true);
  }

  function finishEdit() {
    setIsEdit(false);
  }

  return (
    <Card className="mt-2 w-100" style={{ width: "18rem" }}>
      <Card.Body>
        {isEdit ? (
          <TodoEdit todo={todo} finishEdit={finishEdit} />
        ) : (
          <TodoDisplay todo={todo} startEdit={startEdit} />
        )}
      </Card.Body>
    </Card>
  );
};
