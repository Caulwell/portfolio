import styles from "../styles/Featured.module.css";
import Project from "./Project";


const Featured = () => {


    const projects = [
        {
            name: "TreeVis",
            desc: "Binary Search Tree Visualising Web app",
            technologies: ["React"],
        },
        {
            name: "Spotify-Translations",
            desc: "Integrating APIs to learn Spanish song lyrics",
            technologies: ["React"],
        },
        {
            name: "BulkyBook",
            desc: "Ecommerce store made to learn .NET MVC",
            technologies: ["C#", ".NET6", ".NET MVC", "Bootstrap", "JQuery"],
        },

    ]

    return (

        <div className={styles.featuredContainer}>
            <h3>
                Recent Projects
            </h3>
            <div className={styles.projects}>
                {projects.map(project => {
                    return <Project
                        name={project.name}
                        desc={project.desc}
                        technologies={project.technologies}
                    />
                })}
            </div>
        </div>

    )
    
}

export default Featured;