import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Skills from "./Skills";
import styles from "../styles/Header.module.css";
import Link from "./Link";

const Header = ({title, description, para}) => {

    return (
        <div className={styles.header}>
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.linksContainer}>
        <Link href="https://github.com/Caulwell" name="Github" icon={faGithub}/>
        <Link href="https://www.linkedin.com/in/danny-caulwell/" name="LinkedIn" icon={faLinkedin}/>
       
        </div>
        </div>
            
            <h2 className={styles.desc}>{description}</h2>
            <p className={styles.para}>{para}</p>
            <Skills/>
        </div>
    )
}

export default Header;