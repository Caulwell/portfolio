import styles from "../styles/About.module.css";


const About = () => {

    return(
        <div className={styles.about} id="about">
            <h3>
                About
            </h3>
            <div className={styles.aboutDesc}>
                <h4>Education</h4>
                <ul>
                    <li>MSc Software Development (Distinction) - University Of Glasgow</li>
                    <li>BA (Hons) History (2:1) - University Of Manchester</li>
                </ul>
                <h4>Experience</h4>
                <ul>
                    <li>Project Officer (BSR) - University of Manchester
                        <ul>
                        <li>Project managing introduction of new web-based data entry system</li>
                        <li>Producing SQL scripts for data migration and data cleaning</li>
                        <li>Producing front-end pages using HTML, CSS, JQuery - ensuring strict validation and accessibility</li>
                        <li>Thorough software testing using user roles model</li>
                        <li>Communicating software concepts to stakeholders - bridge between teams</li>
                        </ul>
                    </li>
                </ul>
               
            </div>
        </div>
    )

}

export default About;