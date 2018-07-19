// Social media icons from:
// https://github.com/simple-icons/simple-icons/tree/develop/icons

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SVGInline from 'react-svg-inline'

import Nav from '../../components/UI/Nav/Nav'

import ksLogo from '../../assets/svgs/ks-logo.svg'
import githubIcon from '../../assets/svgs/github.svg'
import linkedinIcon from '../../assets/svgs/linkedin.svg'
import codepenIcon from '../../assets/svgs/codepen.svg'

import styles from './Layout.css';

class Layout extends Component {
  render () {
    return (
      <div className={styles.appContainer}>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <NavLink to="/">
              <SVGInline className={styles.logo} svg={ksLogo} />
            </NavLink>
            <Nav />
          </div>
        </header>
        <main className={styles.layoutContainer}>
          {this.props.children}
        </main>
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
      </div>
    )
  }
}

export default Layout
