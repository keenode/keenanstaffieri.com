import React, { Component } from 'react'
import * as PIXI from 'pixi.js'

import styles from './HeroCanvas.css'

class HeroCanvas extends Component {
  heroApp = null
  box = new PIXI.Container()

  componentDidMount() {
    this.setupPIXI('hero-canvas')
    this.heroApp.ticker.add(delta => this.renderLoop(delta))
    this.box.addChild(this.drawBox())
    this.heroApp.stage.addChild(this.box)
  }

  setupPIXI(canvasSelectorId) {
    const $heroCanvas = document.getElementById(canvasSelectorId)
    this.heroApp = new PIXI.Application({
      width: $heroCanvas.offsetWidth,
      height: $heroCanvas.offsetHeight,
      // antialias: true
    })
    this.heroApp.renderer.backgroundColor = 0x0a182f
    this.heroApp.renderer.autoResize = true
    document.getElementById(canvasSelectorId).appendChild(this.heroApp.view)

    this.heroApp.renderer.resize($heroCanvas.offsetWidth, $heroCanvas.offsetHeight)
    window.onresize = () => {
      this.heroApp.renderer.resize($heroCanvas.offsetWidth, $heroCanvas.offsetHeight)
    }
  }

  drawBox() {
    const box = new PIXI.Graphics()
    box.lineStyle(1, 0x00ff00)
    box.drawRect(300, 300, 100, 100)
    return box
  }

  renderLoop(delta) {
    this.box.position.x += 1
  }

  render() {
    return (
      <section className={styles.heroCanvas}>
        <div id="hero-canvas"></div>
      </section>
    )
  }
}

export default HeroCanvas
