import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import styles from './WorkItem.css'

const workItem = props => (
  <article className={[styles.workItem, props.alignLeft ? styles.workItem_left : null].join(' ')}>
    <ScrollAnimation animateIn={styles.fadeMoveUp} animateOnce>
      <Parallax
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
      >
        <div className={styles.workPicture}></div>
      </Parallax>
      <Parallax
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
      >
        <div className={styles.workBox}>
          <h3 className={styles.workBox_Heading}>{props.title}</h3>
          {props.buttons.map((button, index) => (
            <a key={index} className={styles.button} href={button.url} target="_blank" rel="noopener noreferrer">
              {button.text}
            </a>
          ))}
        </div>
      </Parallax>
    </ScrollAnimation>
  </article>
)

export default workItem
