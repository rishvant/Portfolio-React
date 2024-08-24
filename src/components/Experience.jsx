import { expList } from "../constants";
import "../styles/experience.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="exp-container">
      <h1 className="exp-head">Experience</h1>
      {expList.map((exp) => (
        <ExperienceCard exp={exp} key={exp.timeline}></ExperienceCard>
      ))}
    </section>
  );
};

export default Experience;
