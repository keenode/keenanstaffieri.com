import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, Transition } from 'react-transition-group'
import { TweenMax } from 'gsap'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import Work from './containers/Work/Work'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'

class App extends Component {

  onEnter(node) {
    console.log('[onEnter] ', node)
    if (this.props.location.pathname !== '/') {
      const headingNode = node.querySelector('.heading-canvas')
      TweenMax.fromTo(headingNode, 1, {
        opacity: 0
      }, {
        opacity: 1
      })
    }
  }

  onExit(node) {
    console.log('[onExit] ', node)
    if (this.props.location.pathname !== '/') {
      const headingNode = node.querySelector('.heading-canvas')
      TweenMax.fromTo(headingNode, 1, {
        opacity: 1
      }, {
        opacity: 0
      })
    }
  }

  render() {
    console.log(this.props.location.pathname)
    return (
      <Layout>
        <TransitionGroup>
          <Transition
              key={this.props.location.key}
              mountOnEnter
              unmountOnExit
              onEnter={node => this.onEnter(node)}
              onExit={node => this.onExit(node)}
              timeout={{
                enter: 1000,
                exit: 1000
              }}
            >
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/work" exact component={Work} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
          </Transition>
        </TransitionGroup>
      </Layout>
    )
  }
}

export default withRouter(App)
