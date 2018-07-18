import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SVGInline from 'react-svg-inline'

import Nav from '../../components/UI/Nav/Nav'
import ksLogo from '../../assets/svgs/ks-logo.svg'

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
          <small>&copy; Copyright 2018 Keenan Staffieri.</small>
        </footer>
      </div>
    )
  }
}

export default Layout
