import { Dayjs } from "dayjs";
import { FC } from "react";
import { Stack } from "react-bootstrap";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import { ButtonControl } from "./ButtonControl";

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
      <h2 className="text-center text-700 fs-1">
        {currentDate.format(format)}
      </h2>
    </Stack>
  );
};
