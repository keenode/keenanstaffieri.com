import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header/Header'
import GameCanvas from '../../components/GameCanvas/GameCanvas'
import Footer from '../../components/Footer/Footer'

import * as actions from '../../store/actions'

import styles from './Layout.css';

class Layout extends Component {
  render () {
    return (
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.layoutContainer}>
          {this.props.children}
        </main>
        <GameCanvas
          playerShip={this.props.playerShip}
          gameloopPlayerShipUpdated={ data => this.props.onGameloopPlayerShipUpdate(data) } />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerShip: state.playerShip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGameloopPlayerShipUpdate: data => dispatch(actions.gameloopPlayerShipUpdate(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
