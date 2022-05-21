import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Nav = () => {

    const [isDark, setIsDark] = useState(false);

    const handleThemeChange = () => {

        setIsDark(!isDark)
    }

    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#projects">Projects</Link>
                </li>
            </ul>
            {isDark ?
                <FontAwesomeIcon onClick={handleThemeChange} icon={faSun}/>
            :
            <FontAwesomeIcon onClick={handleThemeChange} icon={faMoon}/>
            }
           
        </nav>
    )
}

export default Nav;