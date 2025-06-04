import { Education } from "./Education/Education";
import { Section } from "./Section/Section";


export const EducationSection = () => {
  const educations = [
    {
      title: "ИЯФ",
      subtitle: "Институт ядерной физики им. Г.И. Будкера СО РАН",
      faculties: [
        {
          name: "Физико-технический; ФТФ",
          period: "Сентябрь 2018 — Май 2020 (1 год и 8 месяцев)",
        },
      ],
    },
    {
      title: "НГТУ",
      subtitle: "Новосибирский государственный технический университет",
      faculties: [
        {
          name: "Физико-технический; ФТФ",
          period: "Сентябрь 2018 — Май 2020 (1 год и 8 месяцев)",
        },
        {
          name: "Физико-технический; ФТФ",
          period: "Сентябрь 2014 — Май 2018 (3 года и 8 месяцев)",
        },
      ],
    },
  ];

  return (
    <Section border>
      {educations.map((education) => (
        <Education className="mb-3" key={education.title} {...education} />
      ))}
    </Section>
  );
};

