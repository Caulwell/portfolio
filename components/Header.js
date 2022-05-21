
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Link from "./Link";

const Header = ({title, description, para}) => {

    return (
        <div className={styles.header}>
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.linksContainer}>
        <Link href="https://github.com/Caulwell" icon={faGithub} name="Github"/>
        <Link href="https://www.linkedin.com/in/danny-caulwell/" icon={faLinkedin} name="LinkedIn"/>
        </div>
        </div>
            
            <h2 className={styles.desc}>{description}</h2>
            <p className={styles.para}>{para}</p>
        </div>
    )
}

export default Header;