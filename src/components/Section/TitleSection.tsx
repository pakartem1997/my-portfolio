import { FC, ReactNode } from "react";
import { clsx } from "clsx";

export interface TitleSectionProps {
  className?: string;
  children?: ReactNode;
}

export const TitleSection: FC<TitleSectionProps> = ({
  className,
  children,
}) => {
  return <h2 className={clsx(className, "m-0")}>{children}</h2>;
};
