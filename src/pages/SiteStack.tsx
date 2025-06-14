import { Section } from "@/components/Section/Section";
import { ListGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const stack = [
  {
    id: 1,
    name: "React Bootstrap 5",
    imgSrc: "/src/assets/stack/react-bootstrap.png",
  },
  { id: 2, name: "React 19", imgSrc: "/src/assets/stack/react.png" },
  {
    id: 3,
    name: "React router 7",
    imgSrc: "/src/assets/stack/react-router.png",
  },
  { id: 4, name: "SASS/SCSS", imgSrc: "/src/assets/stack/sass.png" },
  { id: 5, name: "Vite", imgSrc: "/src/assets/stack/vite.png" },
];

export const SiteStack = () => {
  return (
    <>
      <Section>
        <Section.Header className="mb-1">
          <Section.Title>О сайте</Section.Title>
        </Section.Header>
        <Section.Body>
          <p className="fs-4">
            Этот сайт-портфолио создан для демонстрации моих навыком и знаний в
            разработке <b>React</b> приложений.
            <br />
            На сайте продемонстрированы мои пет-проекты с описанием технологий,
            которые использовались для их создания.
            <br />Я надеюсь, что этот сайт даст вам представление о моих
            знаниях, возможностях и поможет вам в оценке моих навыков.
          </p>
        </Section.Body>
      </Section>
      <Section>
        <Section.Header className="mb-3">
          <Section.Title>Используемые технологии на сайте</Section.Title>
        </Section.Header>
        <Section.Body>
          <ListGroup className="fs-5" as="ol">
            {stack.map((s, index) => (
              <ListGroup.Item key={s.id} as="li">
                <div className="d-inline-flex align-items-center gap-1">
                  {index + 1}.
                  <Image src={s.imgSrc} height={20} width={20} />
                  {s.name}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Section.Body>
      </Section>
    </>
  );
};
