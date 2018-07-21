import React, { Fragment } from 'react'

import HeroCanvas from '../../components/HeroCanvas/HeroCanvas'
import HeadingCanvas from '../../components/HeadingCanvas/HeadingCanvas'

import ksLogo from '../../assets/ks-logo.png'

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
      <div className={styles.heroLogoGraphic} style={{ backgroundImage: `url('${ksLogo}')` }}></div>
      <div className={styles.heroContent}>
        <HeadingCanvas text="Keenan Staffieri" />
        <h3>Frontend Developer</h3>
        <p>Always Learning.</p>
      </div>
    </div>
    <HeroCanvas />
  </Fragment>
)

export default home
