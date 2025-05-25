import Card from "react-bootstrap/Card";
import { Skills } from "@/components/Skills";
import { Section } from "@/components/Section/Section";

export const AboutMe = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Git",
    "C",
  ];

  const personalQualities = [
    "Ответственность",
    "Усидчивость",
    "Коммуникабельность",
    "Креативность",
  ];

  return (
    <Section title="Обо мне" color="blue" border>
      <Card.Subtitle className="mb-2 text-muted">Навыки:</Card.Subtitle>
      <Card.Text className="d-flex gap-1" as={"div"}>
        <Skills skills={skills} />
      </Card.Text>
      <hr />
      <Card.Subtitle className="mb-2 text-muted">
        Личные качества:
      </Card.Subtitle>
      <Card.Text as={"div"}>
        <ul>
          {personalQualities.map((quality) => (
            <li key={quality}>{quality}</li>
          ))}
        </ul>
      </Card.Text>
    </Section>
  );
};

// <Card style={{ width: "100%" }} as={"section"}>
//   <Card.Body>
//     <Card.Title className="pb-2 fs-2">Обо мне</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Навыки:</Card.Subtitle>
//     <Card.Text className="d-flex gap-1" as={"div"}>
//       <Skills skills={skills} />
//     </Card.Text>
//     <hr />
//     <Card.Subtitle className="mb-2 text-muted">
//       Личные качества:
//     </Card.Subtitle>
//     <Card.Text as={"div"}>
//       <ul>
//         {personalQualities.map((quality) => (
//           <li key={quality}>{quality}</li>
//         ))}
//       </ul>
//     </Card.Text>
//   </Card.Body>
// </Card>