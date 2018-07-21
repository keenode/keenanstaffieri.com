import React from 'react'
import SVGInline from 'react-svg-inline'

import ksLogo from '../../assets/ks-logo.png'
import githubIcon from '../../assets/svgs/github.svg'
import linkedinIcon from '../../assets/svgs/linkedin.svg'
import codepenIcon from '../../assets/svgs/codepen.svg'

import styles from './HomeLanding.css'

const homeLanding = () => (
  <div className={styles.pageContainer}>
    <div className={styles.heroLogoGraphic} style={{ backgroundImage: `url('${ksLogo}')` }}></div>
      <h3>Frontend Developer</h3>
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
)

export default homeLanding
