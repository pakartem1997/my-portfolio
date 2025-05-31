import { Dayjs } from "dayjs";
import { TOTAL_DAYS_IN_CALENDAR } from "../constants/calendar";

export function getCalendarDays(day: Dayjs): Dayjs[] {
  const days: Dayjs[] = [];
  const firstDayCurrentMonth = day.startOf('month');
  const lastDayCurrentMonth = day.endOf('month');
  const countCurrentMontht = firstDayCurrentMonth.daysInMonth();
  const countPrevMonth = firstDayCurrentMonth.weekday();
  const countNextMonth = TOTAL_DAYS_IN_CALENDAR - countPrevMonth - countCurrentMontht;

  for (let i = countPrevMonth; i > 0; i--) {
    const dayPrevMonth = firstDayCurrentMonth.subtract(i, "day");
    days.push(dayPrevMonth);
  }

  for (let i = 0; i < countCurrentMontht; i++) {
    const dayCurrentMonth = firstDayCurrentMonth.add(i, "day");
    days.push(dayCurrentMonth);
  }

   const firstDayNextMonth = lastDayCurrentMonth.add(1, 'day');
  for (let i = 0; i < countNextMonth; i++) {
    const dayNextMonth = firstDayNextMonth.add(i, "day");
    days.push(dayNextMonth);
  }

  return days;
}