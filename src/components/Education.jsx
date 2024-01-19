import "../styles/education.css";
import EducationCard from "./EducationCard";

const Education = () => {
    const education = [
        {
            logo: "/Iiit-una-logo.png",
            head: "Indian Institute of Information Technology",
            degree: "B.Tech",
            stream: ", CSE",
            year: "2022-2026"
        },
        {
            logo: "/sgrr.png",
            head: "S.G.R.R. Public School, CBSE",
            degree: "Class 12th",
            stream: ", PCM",
            year: "2020-2021"
        },
        {
            logo: "/sgrr.png",
            head: "S.G.R.R. Public School, CBSE",
            degree: "Class 10th",
            stream: "",
            year: "2018-2019"
        }
    ];

    return (
        <section className="container-education">
            <h1>Education</h1>
            {education.map((card)=><EducationCard key={card.year} edu={card}></EducationCard>)}
        </section>
    )
}

export default Education;