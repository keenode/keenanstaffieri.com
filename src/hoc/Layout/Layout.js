import React, { Component } from 'react'
import SVGInline from 'react-svg-inline'

import Nav from '../../components/UI/Nav/Nav'
import ksLogo from '../../assets/svgs/ks-logo.svg'

import styles from './Layout.css';

class Layout extends Component {
  render () {
    return (
      <div className={styles.AppContainer}>
        <SVGInline svg={ksLogo} />
        <Nav />
        <main className={styles.LayoutContainer}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout
