import React from 'react'
import { getImageUrl } from '../../utils'
import styles from '../About/About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="" />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I am a Frontend Developer with good hands on progress on </p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I am a Frontend Developer with good hands on progress on </p>
            </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About