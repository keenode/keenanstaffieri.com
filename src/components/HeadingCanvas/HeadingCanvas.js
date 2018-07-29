import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
import FontFaceObserver from 'fontfaceobserver'

import styles from './HeadingCanvas.css'

class HeadingCanvas extends Component {
  headingApp = null
  headingText = null
  displacementSprite = null
  displacementFilter = null
  surgeTimer = 0

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
      fontSize: 100,
      fill: '#FCF7FF'
    })
    this.headingText = new PIXI.Text(this.props.text, style)
    this.headingText.pivot.set(-this.headingApp.renderer.width / window.devicePixelRatio + this.headingText.width, 0)

    this.displacementSprite = PIXI.Sprite.fromImage('/assets/images/displacement-clouds.jpg')
    this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

    this.displacementSprite.scale.x = 0.01
    this.displacementSprite.scale.y = 0.01
    // this.displacementSprite.x = 0

    this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite)
    this.headingApp.stage.filters = [this.displacementFilter]

    this.headingApp.stage.addChild(this.displacementSprite)
    this.headingApp.stage.addChild(this.headingText)
  }

  renderLoop(delta) {
    this.surgeTimer += delta
    if (this.surgeTimer > 0) {
      const speed = 10
    
      if (this.displacementSprite.x < 150) {
        let moveAmt = speed - this.surgeTimer * 0.25
        if (moveAmt < 0) {
          moveAmt = 0
        }
        this.displacementSprite.x += (moveAmt * delta)
        this.displacementSprite.scale.x *= 1.3
        this.displacementSprite.scale.y *= 1.05
        // console.log(this.displacementSprite.x)
      } else {
        // console.log('done')
        this.displacementFilter.enabled = false
      } 
    }
  }

  render() {
    return (
      <section id="heading-canvas" className={styles.headingCanvas}></section>
    )
  }
}

export default HeadingCanvas
