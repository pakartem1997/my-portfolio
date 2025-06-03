import { Button, Stack } from "react-bootstrap";
import {
  moveToNextMonth,
  moveToNextYear,
  moveToPreviousMonth,
  moveToPreviousYear,
  moveToToday,
} from "../effector/event";
import { useUnit } from "effector-react";
import { $currentDate } from "../effector/store";
import { DateControl } from "./DateControl";

export const CalendarNavigator = () => {
  const [
    currentDate,
    moveToNextMonthFn,
    moveToPreviousMonthFn,
    moveToTodayFn,
    moveToNextYearFn,
    moveToPreviousYearFn,
  ] = useUnit([
    $currentDate,
    moveToNextMonth,
    moveToPreviousMonth,
    moveToToday,
    moveToNextYear,
    moveToPreviousYear,
  ]);

  const handleSetToday = () => {
    moveToTodayFn();
  };

  const handlePrevMonth = () => {
    moveToPreviousMonthFn();
  };

  const handleNextMonth = () => {
    moveToNextMonthFn();
  };

  const handlePrevYear = () => {
    moveToPreviousYearFn();
  };

  const handleNextYear = () => {
    moveToNextYearFn();
  };

  return (
    <Stack direction="horizontal" gap={2}>
      <Button onClick={handleSetToday}>Сегодня</Button>
      <DateControl
        handlePreviousPeriod={handlePrevMonth}
        handleNextPeriod={handleNextMonth}
        currentDate={currentDate}
        mode="month"
      />
      <DateControl
        handlePreviousPeriod={handlePrevYear}
        handleNextPeriod={handleNextYear}
        currentDate={currentDate}
        mode="year"
      />
    </Stack>
  );
};
