import { FC, ReactNode } from "react";
import { clsx } from "clsx";
import { HeaderSection, HeaderSectionProps } from "./HeaderSection";
import { BodySection, BodySectionProps } from "./BodySection";
import { TitleSection, TitleSectionProps } from "./TitleSection";
import { SideContent, SideContentProps } from "./SideContent";

interface SectionProps {
  children?: ReactNode;
  border?: boolean;
  className?: boolean;
}

interface SectionComponents {
  Header: FC<HeaderSectionProps>;
  Title: FC<TitleSectionProps>;
  Body: FC<BodySectionProps>;
  SideContent: FC<SideContentProps>;
}

export const Section: FC<SectionProps> & SectionComponents = ({
  children,
  border = false,
}) => {
  return (
    <section className={clsx({ "border border-1 rounded p-4": border })}>
      {children}
    </section>
  );
};

Section.Header = HeaderSection;
Section.Title = TitleSection;
Section.Body = BodySection;
Section.SideContent = SideContent;
