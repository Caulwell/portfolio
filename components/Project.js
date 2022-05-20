import styles from "../styles/Project.module.css";

const Project = ({name, desc, technologies}) => {


    return (
        <a className={styles.projectWrap}>
        <div className={styles.project}>
        <div className={styles.projectTop}>
                <h5>{name}</h5>
                <div className={styles.technologies}>
                {technologies.map(tech => <p>{tech}</p>)}
                </div>
            </div>
            <div className={styles.projectBottom}>
                <span>{desc}</span>
                 
            </div>
        </div>
            
        </a>
    )

}

export default Project;