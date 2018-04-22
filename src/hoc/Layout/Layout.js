import React, { Component } from 'react'

import Nav from '../../components/UI/Nav/Nav'

import styles from './Layout.css';

class Layout extends Component {
  render () {
    return (
      <div className={styles.AppContainer}>
        <Nav />
        <main className={styles.LayoutContainer}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout
