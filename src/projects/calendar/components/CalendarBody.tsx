import { Stack } from "react-bootstrap";
import { CalendarDays } from "./CalendarDays";
import { CalendarWeekdays } from "./CalendarWeekdays";

export const CalendarBody = () => {
  return (
    <Stack gap={2}>
      <CalendarWeekdays />
      <CalendarDays />
    </Stack>
  );
};
