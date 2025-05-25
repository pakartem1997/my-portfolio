import { FC } from "react";
import { Skills } from "../Skills";
import Image from "react-bootstrap/Image";
import styles from "./ExperienceWork.module.scss";
import { clsx } from "clsx";

interface ExperienceWorkProps {
  name: string;
  img?: string;
  post: string;
  period: string;
  description: string;
  skills: string[];
  className?: string;
}

export const ExperienceWork: FC<ExperienceWorkProps> = ({
  name,
  img,
  post,
  period,
  description,
  skills,
  className,
}) => {
  return (
    <div className={clsx(className, styles.experienceWork)}>
      <div className="d-flex align-items-center gap-1">
        {img && <Image src={img} style={{ width: "3%" }} />}
        <h5 className="m-0">{name}</h5>
      </div>
      <span className="d-block mb-1 fw-bold">{post}</span>
      <span className="d-block mb-1 text-body-secondary">{period}</span>
      <p className="mb-1">{description}</p>
      <Skills skills={skills} />
    </div>
  );
};
