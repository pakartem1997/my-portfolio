import Card from "react-bootstrap/Card";
import cat from "@/assets/cat.jpg";

import { getAge } from "@/projects/Utils/utils";
import { Socials } from "./Socials";

export const Profile = () => {
  const dateOfBirth: string = "19.02.1997";
  const age: number = getAge(dateOfBirth);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cat} />
      <Card.Body>
        <Card.Title>Пак Артем Владимирович</Card.Title>
        <Card.Text>
          <span className="text-secondary">Дата рождения:</span> {dateOfBirth} (
          {age} лет)
          <br />
          <span className="text-secondary">Местоположение:</span> Россия,
          Новосибирск
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Socials />
      </Card.Footer>
    </Card>
  );
};
