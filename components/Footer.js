import Link from "next/link";
import styles from "../styles/Footer.module.css";


const Footer = () => {

    return (

        <div className={styles.footer}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="https://www.linkedin.com/in/danny-caulwell/">LinkedIn</Link>
            <Link href="https://github.com/Caulwell">Github</Link>
        </div>
    )

}

export default Footer;

