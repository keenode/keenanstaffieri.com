// Social media icons from:
// https://github.com/simple-icons/simple-icons/tree/develop/icons

import React from 'react'
import SVGInline from 'react-svg-inline'

import githubIcon from '../../assets/svgs/github.svg'
import linkedinIcon from '../../assets/svgs/linkedin.svg'
import codepenIcon from '../../assets/svgs/codepen.svg'

import styles from './Footer.css'

const footer = props => (
  <footer className={styles.footer}>
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
    <small>&copy; Copyright 2018 Keenan Staffieri.</small>
  </footer>
)

export default footer
