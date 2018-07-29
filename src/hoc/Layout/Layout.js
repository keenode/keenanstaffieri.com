import React, { Component } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { connect } from 'react-redux'

import Header from '../../components/Header/Header'
import GameCanvas from '../../components/GameCanvas/GameCanvas'
import HullDash from '../../components/UI/HullDash/HullDash'
import LogsPanel from '../../components/UI/LogsPanel/LogsPanel'
import Footer from '../../components/Footer/Footer'

import * as actions from '../../store/actions'

import styles from './Layout.css';

class Layout extends Component {
  render () {
    return (
      <ParallaxProvider>
        <div className={styles.appContainer}>
          <Header />
          <main className={styles.layoutContainer}>
            {this.props.children}
          </main>
          {/* <GameCanvas
            playerShip={this.props.playerShip}
            gameloopPlayerShipUpdated={ data => this.props.onGameloopPlayerShipUpdate(data) }
            notificationReported={ (message, type) => this.props.onAddNotification(message, type) } /> */}
          {/* <LogsPanel logs={this.props.logs} /> */}
          {/* <HullDash playerShip={this.props.playerShip} /> */}
          <span className={styles.bgOverlay}></span>
          <Footer />
        </div>
      </ParallaxProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerShip: state.playerShip,
    logs: state.logs.notifications
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGameloopPlayerShipUpdate: data => dispatch(actions.gameloopPlayerShipUpdate(data)),
    onAddNotification: (notification, type) => dispatch(actions.addNotification(notification, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
