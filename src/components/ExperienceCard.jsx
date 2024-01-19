import "../styles/experience.css";

const ExperienceCard = ({ exp }) => {
    return (
        <div className="exp-item">
            <div className="exp-dots">
                <span className="exp-dot"></span>
                <span className="exp-line"></span>
            </div>
            <div className="exp-content">
                <h2>{exp.title}</h2>
                <span className="exp-time">{exp.timeline}</span>
                <h3>{exp.organisation}</h3>
                <ul>
                    {exp.summary.map(exp => <li key={exp}>{exp}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard;