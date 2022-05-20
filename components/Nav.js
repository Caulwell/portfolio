import Link from "next/link";
import navStyles from "../styles/Nav.module.css";


const Nav = () => {

    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/about">Projects</Link>
                </li>
            </ul>
            <button>Light</button>
        </nav>
    )
}

export default Nav;