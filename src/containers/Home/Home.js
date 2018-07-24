import React, { Fragment } from 'react'
import SVGInline from 'react-svg-inline'

import HeroCanvas from '../../components/HeroCanvas/HeroCanvas'
import HeadingCanvas from '../../components/HeadingCanvas/HeadingCanvas'

import ksLogo from '../../assets/ks-logo.png'
import githubIcon from '../../assets/svgs/github.svg'
import linkedinIcon from '../../assets/svgs/linkedin.svg'
import codepenIcon from '../../assets/svgs/codepen.svg'

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
        <h3 className={styles.subHeading}>Frontend Developer</h3>
        <p className={styles.tagline}>Always <span>Learning</span>.</p>
        <div className={styles.socialMediaContainer}>
          <a href="https://github.com/keenode" target="_blank" rel="noopener noreferrer">
            <SVGInline className={styles.socialMediaIcon} svg={githubIcon} />
          </a>
          <a href="https://codepen.io/keenode/" target="_blank" rel="noopener noreferrer">
            <SVGInline className={styles.socialMediaIcon} svg={codepenIcon} />
          </a>
          <a href="https://www.linkedin.com/in/kstaffieri" target="_blank" rel="noopener noreferrer">
            <SVGInline className={styles.socialMediaIcon} svg={linkedinIcon} />
          </a>
        </div>
      </div>
    </div>
    <HeroCanvas />
  </Fragment>
)

export default home
