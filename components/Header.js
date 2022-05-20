
import styles from "../styles/Header.module.css";

const Header = ({title, description, para}) => {

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.desc}>{description}</h2>
            <p className={styles.para}>{para}</p>
        </div>
    )
}

export default Header;