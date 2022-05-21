import Link from "./Link";
import styles from "../styles/Project.module.css";

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
                {links && links.map(link =><Link href={link.href} name={link.name} icon={link.icon}/>)}
            </div>
        </div>
            
    )

}

export default Project;