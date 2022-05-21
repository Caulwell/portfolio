import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Link.module.css";


const Link = ({href, name, icon}) => {


    return (
        <a className={styles.link} href={href}>
            <FontAwesomeIcon icon={icon}/>
            {name}
        </a>
    )
}

export default Link;