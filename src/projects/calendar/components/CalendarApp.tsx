import { CalendarHeader } from "./CalendarHeader";
import "dayjs/locale/ru";
import { CalendarWeekdays } from "./CalendarWeekdays";
import { CalendarBody } from "./CalendarBody";
import { CalendarNavigator } from "./CalendarNavigator";
import { TitleProject } from "@/projects/Shared/components/TitleProject";

export const CalendarApp = () => {
  return (
    <>
      <TitleProject title="Календарь 🗓️"/>
      <CalendarHeader className="mb-2" />
      <CalendarNavigator />
      <CalendarWeekdays className="mb-2" />
      <CalendarBody />
    </>
  );
};
