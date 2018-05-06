import React from 'react'

import styles from './Work.css'

/*
 * VIZIO.com
 * WeAreEnvoy
 * Elo Touch
 */

const work = () => (
  <div className={styles.PageContainer}>
    <h1>My Work</h1>
    <article className={styles.WorkItem}>
      {/* Picture element will go here */}
      <div className={styles.WorkPicture}></div>
      <div className={styles.WorkBox}>
        <h3>VIZIO.com</h3>
        <a className="btn" href="https://www.vizio.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
      </div>
    </article>
  </div>
)

export default work
