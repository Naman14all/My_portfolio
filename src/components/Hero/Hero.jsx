import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Naman</h1>
            <p className={styles.description}>I'm a passionate and dedicated fresher web developer with a keen interest in creating dynamic and user-friendly web applications. With a solid foundation in HTML, CSS, and JavaScript, I am eager to apply my skills and knowledge to real-world projects. I thrive on learning new technologies and constantly strive to improve my coding abilities.</p>
            <a href="mailto:namanchandra385@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="her" className={styles.heroImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero