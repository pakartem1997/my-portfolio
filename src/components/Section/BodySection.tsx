import { FC, ReactNode } from "react";

export interface BodySectionProps {
  children?: ReactNode;
  className?: string;
}

export const BodySection: FC<BodySectionProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
