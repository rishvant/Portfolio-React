import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [{
        title: "Alumni Connect",
        image: "/alumni-connect.png",
        github: "https://github.com/rishvant/IIITU-Alumni-Website",
        live: "https://iiitu-alumni-connect.vercel.app/"
    }];
    return (
        <section className="projects">
            <h1>Projects</h1>
            <div className="cards">
                {projects.map((project) => (
                    <ProjectCard key={project.github} data={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;