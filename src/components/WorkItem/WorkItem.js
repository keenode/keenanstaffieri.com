import React from 'react'

import styles from './WorkItem.css'

const workItem = props => (
  <article className={[styles.workItem, props.alignLeft ? styles.workItem_left : null].join(' ')}>
    <div className={styles.workPicture}></div>
    <div className={styles.workBox}>
      <h3 className={styles.workBox_Heading}>{props.title}</h3>
      {props.buttons.map((button, index) => (
        <a key={index} className={styles.button} href={button.url} target="_blank" rel="noopener noreferrer">
          {button.text}
        </a>
      ))}
    </div>
  </article>
)

export default workItem
