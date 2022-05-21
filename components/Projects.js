import styles from "../styles/Projects.module.css";
import Project from "./Project";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Projects = () => {


    const projects = [
        {
            name: "TreeVis",
            desc: `Learn Binary Search, AVL and Red-Black Trees through interaction and animation. This project was made in 
                fulfillment of my MSc Dissertation, for which I gained a high Distinction. As a user you can generate random trees,
                 perform standard BST operations, convert between each type and gather information on the tree and operations.
            `,
            technologies: ["ReactJS", "Javascript", "ES6", "HTML5", "CSS3", "MUI"],
            links: [{name: "Live Demo", link: "https://treevis.netlify.app", icon:faUpRightFromSquare }, {name: "Github", link: "https://github.com/Caulwell/BSTVisualisation", icon: faGithub}]
        },
        {
            name: "Spotify-Translations",
            desc: `This project was inspired by my working as an English Teacher in Spain Jan 22 - Apr 22. Utilises the Spotify API, Google Translate API, Genius API and Cheerio for web-scraping.
            Allows users to search and play any song, browse their playlists and gain translated lyrics for this song. Users can also gain 
            definitions for any word with web-scraping utilised to gain the data.`,
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "Cheerio"],
            links: [{name: "Github", link: "https://github.com/Caulwell/SpotifyTranslations", icon: faGithub}],
        },
        {
            name: "BulkyBook",
            desc: `This application was created in order to further understand .NET ecosystem, as well as further my knowledge in authentication,
            eccomerce, and the MVC design pattern. Hosted on Azure, this application defines roles, allows for authentication using a local and Google Oauth strategy.
            Orders can be placed and payments made using Stripe API.`,
            technologies: ["C#", ".NET MVC", "Razor", "Entity Framework", "Bootstrap", "JQuery"],
            links: [{name: "Live Demo", link: "https://github.com/Caulwell/BulkyBook", icon: faUpRightFromSquare}, {name: "Github", link: "https://bulky164.azurewebsites.net/", icon: faGithub}]
        },

    ]

    return (

        <div className={styles.projectsContainer} id="projects">
            <h3>
                Projects
            </h3>
            <div className={styles.projects}>
                {projects.map(project => {
                    return <Project
                        name={project.name}
                        desc={project.desc}
                        technologies={project.technologies}
                        links={project.links}
                    />
                })}
            </div>
        </div>

    )
    
}

export default Projects;