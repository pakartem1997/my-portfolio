import dayjs, { Dayjs } from "dayjs";
import { createStore } from "effector";
import { getCalendarDays } from "../utils/getCalendarDays";
import { initDayJs } from "../utils/initDayJs";
import { moveToNextMonth, moveToNextYear, moveToPreviousMonth, moveToPreviousYear, moveToToday } from "./event";

initDayJs("ru");

export const $currentDate = createStore<Dayjs>(dayjs());
export const $calendarDays = $currentDate.map(currentDate => getCalendarDays(currentDate));

$currentDate.on(moveToNextMonth, (currentDate) => currentDate.add(1, "month"));
$currentDate.on(moveToPreviousMonth, (currentDate) => currentDate.subtract(1, "month"));
$currentDate.on(moveToNextYear, (currentDate) => currentDate.add(1, "year"));
$currentDate.on(moveToPreviousYear, (currentDate) => currentDate.subtract(1, "year"));
$currentDate.on(moveToToday, () => dayjs());
