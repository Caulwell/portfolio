import styles from "../styles/Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "./Link";

const Project = ({name, desc, technologies, links}) => {


    return (
        <div className={styles.project}>
        <div className={styles.projectTitle}>
                <h5>{name}</h5>
            </div>
            <div className={styles.projectDesc}>
            <p>{desc}</p>
            </div>
            <div className={styles.projectSkills}>
                {technologies.map(tech => <p>{tech}</p>)}
            </div>
            <div className={styles.projectLinks}>
                {links && links.map(link => <Link href={link.link} icon={link.icon} name={link.name}/>)}
            </div>
        </div>
            
    )

}

export default Project;