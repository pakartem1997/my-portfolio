import { Dayjs } from "dayjs";

export function isWeekend(day: Dayjs) {
  return day.weekday() === 5 || day.weekday() === 6;
}