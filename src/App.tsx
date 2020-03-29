import React, { Component } from 'react';
import './App.css';
import { Layout } from './view/container/Layout/Layout';
import BurgerBuilder from './view/container/BurgerBuilder/BurgerBuilder';
import Checkout  from './view/container/Checkout/Checkout';
import { Route } from 'react-router-dom'
import Orders  from './view/container/Orders/Orders';

export class App extends Component {

  render() {
    return (
      <div className="App">

        <Layout>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/" exact component={BurgerBuilder}></Route>
            <Route path="/checkout" component={Checkout}></Route>
        </Layout>
      </div>

    );
  }
}


