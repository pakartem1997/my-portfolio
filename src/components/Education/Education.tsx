import { FC } from "react";
import styles from "./Education.module.scss";

type faculty = { name: string; period: string };

interface EducationProps {
  title: string;
  subtitle?: string;
  facultys: faculty[];
  className?: string;
}

export const Education: FC<EducationProps> = ({
  title,
  subtitle,
  facultys,
  className,
}) => {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <p className="text-body-secondary">{subtitle}</p>
      {facultys.map(({ name, period }, index) => (
        <div key={index} className={styles.facultyWrapper}>
          <div className={styles.timeline}>
            <span className={styles.circle}></span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.content}>
            <h6 className="m-0">{name}</h6>
            <p className="text-body-secondary m-0">{period}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
