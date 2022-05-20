
import styles from "../styles/Header.module.css";

const Header = ({title, description, para}) => {

    return (
        <div className={styles.header}>
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.linksContainer}>
            <a href="https://github.com/Caulwell">Github</a>
            <a href="https://www.linkedin.com/in/danny-caulwell/">LinkedIn</a>
        </div>
        </div>
            
            <h2 className={styles.desc}>{description}</h2>
            <p className={styles.para}>{para}</p>
        </div>
    )
}

export default Header;