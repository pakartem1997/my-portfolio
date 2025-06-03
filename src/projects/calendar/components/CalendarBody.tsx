import styles from "./Calendar.module.scss";
import { $calendarDays, $currentDate } from "../effector/store";
import { useUnit } from "effector-react";
import clsx from "clsx";
import { isWeekend } from "../utils/isWeekend";

export const CalendarBody = () => {
  const [calendarDays, currentDate] = useUnit([$calendarDays, $currentDate]);

  return (
    <div className={styles.calendar}>
      {calendarDays.map((day, index) => {
        const isToday = day.isToday();
        const isCurrentMonth = currentDate.month() === day.month();

        return (
          <div
            key={index}
            className={clsx(
              "d-flex justify-content-center align-items-center p-4 border border-1 border-secondary rounded-2 fs-2",
              isCurrentMonth ? "bg-color-500" : "bg-color-600 opacity-75",
              isWeekend(day) && "text-red-500"
            )}
          >
            {isToday ? (
              <span
                className="d-flex justify-content-center align-items-center d-inline-block rounded-circle bg-color-cyan-300"
                style={{ width: "45px", height: "45px" }}
              >
                {day.date()}
              </span>
            ) : (
              day.date()
            )}
          </div>
        );
      })}
    </div>
  );
};
