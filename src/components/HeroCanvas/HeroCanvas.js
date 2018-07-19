import React, { Component } from 'react'
import * as PIXI from 'pixi.js'

import styles from './HeroCanvas.css'

const numBoxes = 1024
const boxColors = [
  0x2374AB,
  0x2E2E3A
]

class HeroCanvas extends Component {
  heroApp = null
  depth = 1
  boxes = new PIXI.Container()

  componentDidMount() {
    this.setupPIXI('hero-canvas')
    this.heroApp.ticker.add(delta => this.renderLoop(delta))
    this.drawBoxes()
    this.heroApp.stage.addChild(this.boxes)
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

  drawBoxes() {
    for (let i = 0; i < numBoxes; i++) {
      const box = new PIXI.Graphics()
      const color = boxColors[Math.floor(Math.random() * boxColors.length)]
      let size = Math.round((Math.random() * 5 * 100) / this.depth) / 100
      const alpha = Math.round(Math.random() * 1 * 100) / 100
      if (size < 1) {
        size = 1
      }
      box.beginFill(color, alpha)
      box.drawRect(0, 0, size, size)
      box.endFill()
      const boxContainer = new PIXI.Container()
      boxContainer.addChild(box)
      boxContainer.position.x = Math.floor(Math.random() * this.heroApp.renderer.width)
      boxContainer.position.y = Math.floor(Math.random() * this.heroApp.renderer.height)
      boxContainer.rotation = Math.random() * Math.PI * 2
      this.boxes.addChild(boxContainer)
    }
  }

  drawBox() {
    const box = new PIXI.Graphics()
    box.lineStyle(1, 0x00ff00)
    box.drawRect(300, 300, 100, 100)
    return box
  }

  renderLoop(delta) {
  }

  render() {
    return (
      <section id="hero-canvas" className={styles.heroCanvas}></section>
    )
  }
}

export default HeroCanvas
