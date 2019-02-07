import React, { Component } from 'react';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import News from './components/News';
import GalleryItem from './components/GalleryItem';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/news/:id" component={News} />
              <Route exact path="/gallery/:id" component={GalleryItem} />
              <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </Router>
     </Provider >

    );
  }
}

export default App;
