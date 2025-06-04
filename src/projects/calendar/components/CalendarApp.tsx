import "dayjs/locale/ru";
import { CalendarWeekdays } from "./CalendarWeekdays";
import { CalendarBody } from "./CalendarBody";
import { CalendarNavigator } from "./CalendarNavigator";
import { Section } from "@/components/Section/Section";

export const CalendarApp = () => {
  return (
    <Section>
      <Section.Header backButton>
        <Section.Title>Календарь 🗓️</Section.Title>
      </Section.Header>
      <Section.Body>
        <CalendarNavigator />
        <CalendarWeekdays className="mb-2" />
        <CalendarBody />
      </Section.Body>
    </Section>
  );
};
