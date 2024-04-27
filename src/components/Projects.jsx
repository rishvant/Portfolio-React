import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [{
        title: "Alumni Connect",
        image: "/alumni-connect.png",
        github: "https://github.com/rishvant/Alumni-Connect-Frontend",
        live: "https://iiitu-alumni-connect.vercel.app/"
    },
    {
        title: "Fit FusionX",
        image: "/fitfusionx.png",
        github: "https://github.com/rishvant/Advanced-Ecommerce-Frontend",
        live: "https://fit-fusionx.vercel.app/"
    }
    ];
    
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