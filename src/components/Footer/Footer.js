// Social media icons from:
// https://github.com/simple-icons/simple-icons/tree/develop/icons

import React from 'react'
import { withRouter } from 'react-router-dom'
import SVGInline from 'react-svg-inline'

import githubIcon from '../../assets/svgs/github.svg'
import linkedinIcon from '../../assets/svgs/linkedin.svg'
import codepenIcon from '../../assets/svgs/codepen.svg'

import styles from './Footer.css'

const footer = props => {
  const isHome = props.location.pathname === '/'
  // const socialMediaIcons = !isHome ? (
  const socialMediaIcons = true ? (
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
  ) : null

  return (
    <footer className={[styles.footer, isHome ? styles.footerIsHome : null].join(' ')}>
      {socialMediaIcons}
      <small>&copy; Copyright 2018 Keenan Staffieri.</small>
    </footer>
  )
}

export default withRouter(footer)
