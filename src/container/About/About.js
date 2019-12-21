import React from 'react'
import styles from './About.css'
import { Redirect } from 'react-router-dom';
function About() {
    return <Redirect to="/login"></Redirect>
    //return <div className={styles.title}>This SSR Demo is produced by 开课吧</div>
}

export default About;