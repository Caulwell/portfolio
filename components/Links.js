import styles from "../styles/Links.module.css";


const Links = () => {

    const links = [

        {
            name: "Github",
            href: "https://github.com/Caulwell",
            logo: "",
            key: "link1"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/danny-caulwell/",
            logo: "",
            key: "link2"
        },

    ];

    return (
        <div className={styles.linksContainer}>
        <span>Find me on: &rarr;</span>
        <div className={styles.buttons}>
        {links.map(link => {
                return <a key={link.key} href={link.href}>{link.name}</a>
            })}
        </div>
        
        </div>

    )
}


export default Links;