import { FC } from "react";
import { Button, Stack } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

interface CalendarHeaderProps {
  title: string;
  className?: string;
}

export const TitleProject: FC<CalendarHeaderProps> = ({ className, title }) => {
  const navigate = useNavigate();
  
  return (
    <Stack className={className} direction="horizontal">
      <Button onClick={() => {
        navigate(-1);
      }} className="rounded-circle me-2 p-2 d-flex justify-content-center align-items-center" variant="outline-secondary">
        <FaArrowLeft />
      </Button>
      <h2 className="m-0">{title}</h2>
    </Stack>
  );
};
