import React from 'react'
import { NavLink } from 'react-router-dom'

import Nav from '../../components/Nav/Nav'

import ksLogo from '../../assets/ks-logo.png'

import styles from './Header.css'

const header = props => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <NavLink to="/">
        <div className={styles.logoGraphic} style={{ backgroundImage: `url('${ksLogo}')` }}></div>
      </NavLink>
      <Nav />
    </div>
  </header>
)

export default header
