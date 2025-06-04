import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { clsx } from "clsx";

import { DisplayMode, DisplayModeToggle } from "@/components/DisplayModeToggle";
import { projects } from "./projectsData";
import { useNavigate } from "react-router";
import { Section } from "@/components/Section/Section";

export const Projects = () => {
  const navigate = useNavigate();

  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.Table
  );

  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState(projects);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleChangeFilter() {
    if (search === "") {
      setData(projects);
      return;
    }
    const filterProjects = projects.filter((project) =>
      project.projectName.toLowerCase().includes(search.toLowerCase())
    );
    setData(filterProjects);
  }

  return (
    <Section>
      <Section.Header className="mb-2">
        <Section.Title>Проекты</Section.Title>
      </Section.Header>
      <Section.Body>
        <Stack className="mb-3" direction="horizontal" gap={3}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Найти проект"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={handleChange}
            />
            <Button onClick={handleChangeFilter} variant="outline-secondary">
              Найти
            </Button>
          </Form>
          <DisplayModeToggle
            className="ms-auto"
            setDisplayMode={setDisplayMode}
            displayMode={displayMode}
          />
        </Stack>
        <Row xs={1} md={displayMode} className="g-4">
          {data.map((project) => (
            <Col key={project.projectName}>
              <Card
                className={clsx(
                  {
                    "flex-row": displayMode === DisplayMode.Column,
                  },
                  "w-100 h-100"
                )}
                border="secondary"
              >
                <Card.Img
                  className="object-fit-cover"
                  style={{
                    maxWidth: "304px",
                  }}
                  height={300}
                  width={"100%"}
                  variant="top"
                  src={project.imageUrl}
                />
                <Card.Body
                  className={clsx(
                    {
                      "align-items-start": displayMode === DisplayMode.Column,
                    },
                    "d-flex flex-column"
                  )}
                >
                  <Card.Title>{project.projectName}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <Button
                    variant="outline-secondary"
                    onClick={() => navigate(project.srcProject)}
                  >
                    Открыть проект
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Section.Body>
    </Section>
  );
};
