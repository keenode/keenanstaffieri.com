import React from 'react'

import ksLogo from '../../assets/ks-logo.png'

import styles from './HomeLanding.css'

const homeLanding = () => (
  <div className={styles.pageContainer}>
    <div className={styles.logoGraphic} style={{ backgroundImage: `url('${ksLogo}')` }}></div>
    <h1>Keenan Staffieri</h1>
    <h3>Frontend Developer</h3>
    <a href="/keenan_staffieri_resume.pdf" className={styles.btn} target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  </div>
)

export default homeLanding
