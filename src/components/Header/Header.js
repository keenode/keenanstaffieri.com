import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import Nav from '../../components/Nav/Nav'

import ksLogo from '../../assets/ks-logo.png'

import styles from './Header.css'

const header = props => {
  const isHome = props.location.pathname === '/'
  const logo = !isHome ? (
    <NavLink to="/">
      <div className={styles.logoGraphic} style={{ backgroundImage: `url('${ksLogo}')` }}></div>
    </NavLink>
  ) : null
  return (
    <header className={[styles.header, isHome ? styles.headerIsHome : null].join(' ')}>
      <div className={styles.headerContainer}>
        {logo}
        <Nav />
      </div>
    </header>
  )
}

export default withRouter(header)
