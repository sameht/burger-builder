import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './view/container/Layout/Layout';
import { BurgerBuilder } from './view/container/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">

      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>

  );
}

export default App;
