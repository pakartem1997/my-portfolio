import {
  Badge,
  Button,
  FloatingLabel,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { $countOfTasks, $descriptionTodo, $titleTodo } from "../effector/store";
import {
  addTodo,
  changeDescriptionTodo,
  changeTitleTodo,
} from "../effector/event";
import { useUnit } from "effector-react";
import { ChangeEvent } from "react";

export const TodoListHeader = () => {
  const [
    titleTodo,
    descriptionTodo,
    countOfTasks,
    addTodoFn,
    changeTitleTodoFn,
    changeDescriptionTodoFn,
  ] = useUnit([
    $titleTodo,
    $descriptionTodo,
    $countOfTasks,
    addTodo,
    changeTitleTodo,
    changeDescriptionTodo,
  ]);

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    changeTitleTodoFn(e.target.value);
  }

  function handleDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
    changeDescriptionTodoFn(e.target.value);
  }

  return (
    <div>
      <Stack className="mb-2" direction="horizontal">
        <h2 className="m-0">Todo List 📋</h2>
        <div className="ms-auto fs-4">Количество задач: <Badge bg="secondary">{countOfTasks}</Badge></div>
      </Stack>
      <Form>
        <InputGroup className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Заголовок">
            <Form.Control
              placeholder="Заголовок"
              name="title"
              value={titleTodo}
              onChange={handleTitleChange}
            />
          </FloatingLabel>
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() =>
              addTodoFn({ title: titleTodo, description: descriptionTodo })
            }
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
            value={descriptionTodo}
            onChange={handleDescriptionChange}
          />
        </FloatingLabel>
      </Form>
    </div>
  );
};
