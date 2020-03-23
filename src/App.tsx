import React, { Component } from 'react';
import './App.css';
import { Layout } from './view/container/Layout/Layout';
import BurgerBuilder from './view/container/BurgerBuilder/BurgerBuilder';


export class App extends Component {

  render() {
    return (
      <div className="App">

        <Layout>
          <BurgerBuilder /> 
        </Layout>
      </div>

    );
  }
}


