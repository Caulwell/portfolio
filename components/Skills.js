import styles from "../styles.Skills.module.css";


const Skills = () => {

    const skills = [

        {
            name: "React.JS",
            logo: ""
        },
        {
            name: "C#",
            logo: ""
        },
        {
            name: ".NET",
            logo: ""
        },
        {
            name: "SQL",
            logo: ""
        },
        {
            name: "Node.JS",
            logo: ""
        },
        {
            name: "Java",
            logo: ""
        },
    ];

    return (

        <div className={styles.skills}>
            <h3>Skills</h3>
            <div className={styles.skillsList}>
                {skills.map(skill => {
                    return (

                    )
                })}
            </div>

        </div>
    )
}

export default Skills;