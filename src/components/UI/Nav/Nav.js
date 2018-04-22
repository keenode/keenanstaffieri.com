import React from 'react'

import NavItem from './NavItem/NavItem'

import styles from './Nav.css'

const nav = props => (
  <nav className={styles.Nav}>
    <ul>
      <NavItem link="/" exact>Home</NavItem>
      <NavItem link="/about">About</NavItem>
    </ul>
  </nav>
)

export default nav
