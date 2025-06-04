import { FC, ReactNode } from "react";

export interface SideContentProps {
  className?: string;
  children?: ReactNode;
}

export const SideContent: FC<SideContentProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};
