import { FC, ReactNode } from "react";
import { clsx } from "clsx";

interface SectionProps {
  title?: string;
  children?: ReactNode;
  border?: boolean;
  color?: "blue" | "purple" | "green";
  getRightComponent?: () => ReactNode; 
}

export const Section: FC<SectionProps> = ({
  title,
  children,
  border = false,
  getRightComponent,
}) => {
  return (
    <section className={clsx({ "border border-1 rounded p-4": border })}>
      <div className="mb-4">
        <h2
          className={clsx(
            "border-bottom border-2 pb-1",
          )}
        >
          {title}
        </h2>
        {getRightComponent && getRightComponent()}
      </div>
      <div>{children}</div>
    </section>
  );
};
