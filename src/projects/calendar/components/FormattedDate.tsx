import { FC, ReactNode } from "react";

interface FormattedDateProps {
  children?: ReactNode;
}

export const FormattedDate: FC<FormattedDateProps> = ({ children }) => {
  return <span className="m-0 text-700 fs-2 fw-bolder">{children}</span>;
};
