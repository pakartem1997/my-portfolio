import { FC, ReactNode } from "react";
import styles from "./Section.module.scss";
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
  color,
  getRightComponent,
}) => {
  return (
    <section className={clsx({ "border border-1 rounded p-4": border })}>
      <div className="mb-4">
        <h2
          className={clsx(
            "border-bottom border-2 pb-1",
            styles.title,
            color && styles[color]
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
