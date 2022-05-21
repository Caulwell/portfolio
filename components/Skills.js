import styles from "../styles/Skills.module.css";
import Skill from "./Skill";


const Skills = () => {

    const backEnd = [
        {
            name: "NodeJS",
            logo: "devicon-nodejs-plain"
        },
        {
            name: ".NET",
            logo: "devicon-dotnetcore-plain"
        },
        {
            name: ".NET",
            logo:"devicon-dotnetcore-plain"
        },
        {
            name: "SQL Server",
            logo: "devicon-microsoftsqlserver-plain"
        },
        {
            name: "PostgreSQL",
            logo: "devicon-postgresql-plain"
        },
        {
            name: "MongoDB",
            logo: "devicon-mongodb-plain"
        }
    ];

    const frontEnd = [
        {
            name: "ReactJS",
            logo: "devicon-react-original"
        },
        {
            name: "JQuery",
            logo: "devicon-jquery-plain"
        },
        {
            name: "Bootstrap",
            logo: "devicon-bootstrap-plain"
        },
        {
            name: "Material UI",
            logo: "devicon-materialui-plain"
        },
    ];

    return (

        <div className={styles.skills}>
                <div className={styles.listSection}>
                Frontend:
                    {frontEnd.map(skill => 
                        <div className={styles.skill}> 
                        <Skill name={skill.name} logo={skill.logo}/>
                        </div>
                    )}
                </div>
                <div className={styles.listSection}>
                Backnd:
                    {backEnd.map(skill => 
                            <Skill name={skill.name} logo={skill.logo}/>
                    )}
                </div>
        </div>
    )
}
export default Skills;