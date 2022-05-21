
import styles from "../styles/Skill.module.css";

const Skill = ({name, logo}) => {



    return (
        <div className={styles.skill}> 
        <i class={logo}></i>
            {name}
        </div>
    )

}

export default Skill;