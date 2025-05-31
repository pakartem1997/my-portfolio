import clsx from "clsx";
import dayjs from "dayjs";
import { FC } from "react";
import styles from "./Calendar.module.scss";

interface CalendarHeaderProps {
  className?: string;
}

export const CalendarWeekdays: FC<CalendarHeaderProps> = ({ className }) => {
  const weekdaysMin = dayjs.weekdaysMin(true);

  return (
    <div className={clsx(className, styles.calendar)}>
      {weekdaysMin.map((weekday) => (
        <div
          key={weekday}
          className="d-flex justify-content-center align-items-center p-2 border border-1 border-secondary rounded-2 fs-4 bg-color-blue-300"
        >
          {weekday}
        </div>
      ))}
    </div>
  );
};
