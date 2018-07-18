import React from 'react'

import styles from './Work.css'

/*
 * Space Shooter
 * Roguelike
 * VIZIO.com
 * WeAreEnvoy
 * The Honest Kitchen
 * Mitchell & Ness
 * Elo Touch
 */

const work = () => (
  <div className={styles.pageContainer}>
    <h1>My Work</h1>
    <article className={styles.workItem}>
      {/* Picture element will go here */}
      <div className={styles.workPicture}></div>
      <div className={styles.workBox}>
        <h3>VIZIO.com</h3>
        <a className="btn" href="https://www.vizio.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
      </div>
    </article>
    <article className={[styles.workItem, styles.workItem_left].join(' ')}>
      {/* Picture element will go here */}
      <div className={styles.workPicture}></div>
      <div className={styles.workBox}>
        <h3>VIZIO.com</h3>
        <a className="btn" href="https://www.vizio.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
      </div>
    </article>
  </div>
)

export default work
