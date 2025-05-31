import { CalendarHeader } from "./CalendarHeader";
import "dayjs/locale/ru";
import { CalendarWeekdays } from "./CalendarWeekdays";
import { CalendarBody } from "./CalendarBody";
import { CalendarNavigator } from "./CalendarNavigator";

export const CalendarApp = () => {
  return (
    <>
      <CalendarHeader className="mb-2" />
      <CalendarNavigator />
      <CalendarWeekdays className="mb-2" />
      <CalendarBody />
    </>
  );
};
