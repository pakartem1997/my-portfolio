import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Profile } from "@/components/Profile";
import { AboutMe } from "@/components/AboutMe";
import { ExperienceSections } from "@/components/ExperienceSections/ExperienceSections";
import { EducationSection } from "@/components/EducationSection";

export const Home = () => {
  return (
      <Row>
        <Col xxl="auto">
          <Profile />
        </Col>
        <Col>
          <Row className="mb-4">
            <AboutMe />
          </Row>
          <Row className="mb-4">
            <ExperienceSections />
          </Row>
          <Row>
            <EducationSection />
          </Row>
        </Col>
      </Row>
  );
};
