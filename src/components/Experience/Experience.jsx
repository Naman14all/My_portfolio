import React from 'react'
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'
import styles from "../Experience/Experience.module.css"

const Experience = () => {
  return <section id="skills" className={styles.container}>
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
        <div className={styles.skills}>{
            skills.map((skill,id)=>{
                return <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                    <p>{skill.title}</p>
                </div>
            })}</div>
        <ul></ul>
    </div>
  </section>
}

export default Experience