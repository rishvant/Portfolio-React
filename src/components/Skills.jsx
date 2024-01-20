import "../styles/skills.css";
import Card from "../components/Card";

const cards = [
    {
        name: "HTML",
        url: "html.svg"
    },
    {
        name: "CSS",
        url: "css.svg"
    },
    {
        name: "JavaScript",
        url: "js.svg"
    },
    {
        name: "NodeJS",
        url: "node.svg"
    },
    {
        name: "MongoDB",
        url: "mongo.svg"
    },
    {
        name: "ReactJS",
        url: "react.svg"
    },
    {
        name: "ExpressJS",
        url: "express.svg"
    },
    {
        name: "jQuery",
        url: "jquery.svg"
    },
    {
        name: "Bootstrap",
        url: "bootstrap.svg"
    },
    {
        name: "Tailwind CSS",
        url: "tailwind.svg"
    },
    {
        name: "C",
        url: "c.svg"
    },
    {
        name: "C++",
        url: "c++.svg"
    },
    {
        name: "GIT",
        url: "git.svg"
    }
];

const Skills = () => {
    return (
        <section className="skills">
            <h1>Skills</h1>
            <div className="skills-container">
                {/* <div className="skills-cards"> */}
                    {cards.map((card, index) => <Card key={index} url={card.url} name={card.name}></Card>)}
                {/* </div> */}
            </div>
        </section>
    )
}

export default Skills;