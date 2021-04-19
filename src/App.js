import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import NavbarHead from './components/NavbarHead';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
class App extends Component {
  render(){
    return(
      <React.Fragment>
        <NavbarHead/>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/Cart' component={Cart} />
          <Route  component={Default} />
        </Switch>
        <Modal />
        
      </React.Fragment>

      

    );
  }
}

export default App;
