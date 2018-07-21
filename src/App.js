import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import HomeLanding from './containers/HomeLanding/HomeLanding'
// import Home from './containers/Home/Home'
// import Work from './containers/Work/Work'
// import About from './containers/About/About'
// import Contact from './containers/Contact/Contact'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={HomeLanding} />
          {/* <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </Layout>
    )
  }
}

export default App
