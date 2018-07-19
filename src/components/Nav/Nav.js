import React from 'react'

import NavItem from './NavItem/NavItem'

import styles from './Nav.css'

const nav = props => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <NavItem link="/" exact>home</NavItem>
      <NavItem link="/work">work</NavItem>
      <NavItem link="/about">about</NavItem>
      <NavItem link="/contact">contact</NavItem>
    </ul>
  </nav>
)

export default nav
