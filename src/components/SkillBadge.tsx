import { FC } from "react";

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span
      key={skill}
      className="py-1 px-2 rounded-pill bg-secondary bg-opacity-25"
      style={{ fontSize: "0.75rem" }}
    >
      {skill}
    </span>
  );
};
