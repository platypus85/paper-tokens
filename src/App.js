import React, {Component} from 'react';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path='/'
            render={() => (
            <div className="App">
              <Home/>
            </div>
          )}/>
          <Route
            exact={true}
            path='/about'
            render={() => (
            <div className="App">
              <About/>
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
