import { Dayjs } from "dayjs";
import { FC } from "react";
import { Stack } from "react-bootstrap";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import { ButtonControl } from "./ButtonControl";
import { FormattedDate } from "./FormattedDate";

interface DateControlProps {
  handlePreviousPeriod: () => void;
  handleNextPeriod: () => void;
  currentDate: Dayjs;
  mode: "year" | "month";
}

export const DateControl: FC<DateControlProps> = ({
  handlePreviousPeriod,
  handleNextPeriod,
  currentDate,
  mode,
}) => {
  const format = mode === "year" ? "YYYY" : "MMMM";

  return (
    <Stack direction="horizontal" gap={2}>
      <ButtonControl onClick={handlePreviousPeriod}>
        <IoMdArrowRoundUp />
      </ButtonControl>
      <ButtonControl onClick={handleNextPeriod}>
        <IoMdArrowRoundDown />
      </ButtonControl>
      <FormattedDate>{currentDate.format(format)}</FormattedDate>
    </Stack>
  );
};
