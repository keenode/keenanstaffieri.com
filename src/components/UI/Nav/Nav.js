import React from 'react'

import NavItem from './NavItem/NavItem'

import styles from './Nav.css'

const nav = props => (
  <nav className={styles.Nav}>
    <ul className={styles.NavList}>
      <NavItem link="/" exact>Home</NavItem>
      <NavItem link="/work">Work</NavItem>
      <NavItem link="/about">About</NavItem>
      <NavItem link="/contact">Contact</NavItem>
    </ul>
  </nav>
)

export default nav
