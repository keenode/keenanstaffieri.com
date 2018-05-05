import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SVGInline from 'react-svg-inline'

import Nav from '../../components/UI/Nav/Nav'
import ksLogo from '../../assets/svgs/ks-logo.svg'

import styles from './Layout.css';

class Layout extends Component {
  render () {
    return (
      <div className={styles.AppContainer}>
        <header className={styles.Header}>
          <NavLink to="/">
            <SVGInline className={styles.Logo} svg={ksLogo} />
          </NavLink>
          <Nav />
        </header>
        <main className={styles.LayoutContainer}>
          {this.props.children}
        </main>
        <footer className={styles.Footer}>
          <small>&copy; Copyright 2018 Keenan Staffieri.</small>
        </footer>
      </div>
    )
  }
}

export default Layout
