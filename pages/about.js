import Link from "next/link";

import Header from "../components/Header";
import styles from "../styles/about.module.css";

const about =() =>{
    return (
        <div>
            <Header 
                title="Hello 👋 !" 
                description="I am a recent MSc Software Development graduate searching for my first role in industry"
                para="Please see below for my education and work experience"
                />
            <div className={styles.education}>
                <h3 className={styles.educationTitle}>Education</h3>
                <div className={styles.educationDetails}>
                    <h4 className={styles.educationItem}>MSc Software Development(Distinction) - <span>University Of Glasgow</span></h4> 
                    <p>Jan 2021 - Dec 2021 </p>
                    <p>This was a Computer Science Conversion Masters course, covering the fundamentals of computing, algorithms, database design, networking and programming in Java.</p>
                    <p>Further modules were taken in Internet Technology (Python), Data Visualisation (Python) and Enterprise Cyber Security</p>
                    <p>My self-led Dissertation project involved the creation of <Link href="/">TreeVis</Link></p>
                </div>
                <div className={styles.educationDetails}>
                    <h4 className={styles.educationItem}>BA (Hons) History (2:1) - <span>University Of Manchester</span></h4> 
                    <p>Sept 2014 - July 2018 </p>
                </div>
                <h3 className={styles.educationTitle}>Work Experience</h3>
                <div className={styles.educationDetails}>
                    <h4 className={styles.educationItem}>BSR Project Administrator- <span>University Of Manchester</span></h4> 
                    <p>Jan 2020 - Present </p>
                    <p>Led the introduction of a new web-based data entry system</p>
                    <p>Production of SQL scripts for data cleaning and migration</p>
                    <p>Production of frontend pages using HTML, CSS, and JQuery</p>
                    <p>Performed developer testing, bug fixing, and presented bi-weekly reports to stakeholders</p>
                </div>
            </div>
        </div>
    )
}

export default about;