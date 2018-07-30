import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import scrollToElement from 'scroll-to-element'

import Nav from '../../components/Nav/Nav'

import ksLogo from '../../assets/ks-logo.png'

import styles from './Header.css'

class Header extends Component {
  state = {
    isFixed: true
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isFixed = window.pageYOffset > 1000 ? true : false
      this.setState({ isFixed })
    })
  }

  goBackToTop(e) {
    e.preventDefault()
    scrollToElement('#top', {
      offset: -999,
      ease: 'in-out-quad',
      duration: 1000
    })
  }

  render() {
    const isHome = this.props.location.pathname === '/'
    const logo = !isHome ? (
      <NavLink to="/">
        <div className={styles.logoGraphic} style={{ backgroundImage: `url('${ksLogo}')` }}></div>
      </NavLink>
    ) : null

    return (
      <Fragment>
        <header className={[
          styles.header,
          this.state.isFixed ? styles.headerIsFixed : null,
          isHome ? styles.headerIsHome : null].join(' ')}>
          <div className={styles.headerContainer}>
            {logo}
            <Nav />
          </div>
        </header>
        <div className={[styles.fixedBottom, this.state.isFixed ? styles.fixedBottom_show : null].join(' ')}>
          <div className={styles.fixedBottomContainer}>
            <a href="#top" className={styles.backToTop} onClick={this.goBackToTop}>
            </a>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Header)
