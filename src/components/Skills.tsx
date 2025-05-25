import { FC } from "react";
import Badge from 'react-bootstrap/Badge';

interface SkillsProps {
  skills: string[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="d-flex gap-1">
      {skills.map((skill) => (
         <Badge key={skill} pill bg="secondary">{skill}</Badge>
      ))}
    </div>
  );
};
