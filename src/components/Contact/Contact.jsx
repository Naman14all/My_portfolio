import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "../Contact/Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:namanchandra385@gmail.com">namanchandra385@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
                <a href="www.linkedin.com/in/naman-chandra-3457481b4">linkedin.com/in/naman-chandra</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/Naman14all">github.com/Naman14all</a>
            </li>
        </ul>
    </footer>
  )
}
