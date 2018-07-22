import React, { Component } from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import styles from './Layout.css';

class Layout extends Component {
  render () {
    return (
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.layoutContainer}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
