import React, { Fragment } from 'react'

import HeroCanvas from '../../components/HeroCanvas/HeroCanvas'
import HeadingCanvas from '../../components/HeadingCanvas/HeadingCanvas'

import styles from './Home.css'

const home = () => (
  <Fragment>
    <div className={styles.pageBorders}>
      <span className={styles.pageBorder_Top}></span>
      <span className={styles.pageBorder_Right}></span>
      <span className={styles.pageBorder_Bottom}></span>
      <span className={styles.pageBorder_Left}></span>
    </div>
    <div className={styles.pageContainer}>
      <HeadingCanvas text="Keenan Staffieri" />
      <h3>Frontend Developer</h3>
      <p>Always Learning.</p>
    </div>
    <HeroCanvas />
  </Fragment>
)

export default home
