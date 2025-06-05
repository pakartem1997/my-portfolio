import dayjs from "dayjs";
import { FC } from "react";
import { Stack } from "react-bootstrap";
import { CalendarNavigator } from "./CalendarNavigator";
import clsx from "clsx";
import { FormattedDate } from "./FormattedDate";

interface CalendarHeaderProps {
  className?: string;
}

export const CalendarHeader: FC<CalendarHeaderProps> = ({ className }) => {
  return (
    <Stack
      className={clsx(className, "justify-content-between")}
      direction="horizontal"
    >
      <CalendarNavigator />
      <FormattedDate>{dayjs().format("DD.MM.YYYY")}</FormattedDate>
    </Stack>
  );
};
