import React from 'react'
import { NavLink } from 'react-router-dom'
import SVGInline from 'react-svg-inline'

import Nav from '../../components/Nav/Nav'

import ksLogo from '../../assets/svgs/ks-logo.svg'

import styles from './Header.css'

const header = props => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <NavLink to="/">
        <SVGInline className={styles.logo} svg={ksLogo} />
      </NavLink>
      <Nav />
    </div>
  </header>
)

export default header
