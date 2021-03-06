import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
import FontFaceObserver from 'fontfaceobserver'

import styles from './HeadingCanvas.css'

class HeadingCanvas extends Component {
  headingApp = null
  headingText = null

  componentDidMount() {
    const font = new FontFaceObserver('Cantarell')
    font.load().then(() => {
      this.setupPIXI('heading-canvas')
      this.addHeading()
      this.headingApp.ticker.add(delta => this.renderLoop(delta))
    })
  }

  setupPIXI(canvasSelectorId) {
    const $heroCanvas = document.getElementById(canvasSelectorId)
    this.headingApp = new PIXI.Application({
      width: $heroCanvas.offsetWidth,
      height: $heroCanvas.offsetHeight,
      transparent: true,
      resolution: window.devicePixelRatio,
      autoResize: true,
      // antialias: true
    })
    this.headingApp.renderer.autoResize = true
    document.getElementById(canvasSelectorId).appendChild(this.headingApp.view)

    this.headingApp.renderer.resize($heroCanvas.offsetWidth, $heroCanvas.offsetHeight)
    window.onresize = () => {
      this.headingApp.renderer.resize($heroCanvas.offsetWidth, $heroCanvas.offsetHeight)
    }
  }

  addHeading() {
    const style = new PIXI.TextStyle({
      fontFamily: '"Cantarell", serif',
      fontSize: 80,
      fill: '#FCF7FF'
    })
    this.headingText = new PIXI.Text(this.props.text, style)
    this.headingText.pivot.set(-this.headingApp.renderer.width / window.devicePixelRatio + this.headingText.width, 0)
    this.headingApp.stage.addChild(this.headingText)
  }

  renderLoop(delta) {
  }

  render() {
    return (
      <section id="heading-canvas" className={styles.headingCanvas}></section>
    )
  }
}

export default HeadingCanvas
