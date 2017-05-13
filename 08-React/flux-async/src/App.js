import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Home from './routes/Home'
import Menu from './routes/Menu'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <hr />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
