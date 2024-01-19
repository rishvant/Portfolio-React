import "../styles/experience.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    const expList = [
        {
            title: "Web Development Intern",
            timeline: "July' 2023 - Aug' 2023",
            organisation: "Oasis Infobyte",
            summary: ["4-Weeks Web development internship","Created a portfolio website using HTML and CSS.","Cloned a website using HTML, CSS, and JavaScript."]
        }
    ];

    return (
        <section className="exp-container">
            <h1 className="exp-head">Experience</h1>
            {expList.map(exp => <ExperienceCard exp={exp} key={exp.timeline}></ExperienceCard>)}
        </section>  
    )
}

export default Experience;