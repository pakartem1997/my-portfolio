import "dayjs/locale/ru";
import { CalendarBody } from "./CalendarBody";
import { Section } from "@/components/Section/Section";
import { CalendarHeader } from "./CalendarHeader";

export const CalendarApp = () => {
  return (
    <Section>
      <Section.Header className="mb-3" backButton>
        <Section.Title>Календарь 🗓️</Section.Title>
      </Section.Header>
      <Section.Body>
        <CalendarHeader />
        <CalendarBody />
      </Section.Body>
    </Section>
  );
};
