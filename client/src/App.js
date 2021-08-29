import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/Header'
import Home from './views/Home'
import Product from './views/Product'

function App() {
  return (
    <div>
      <Router>
        
        <Header />

        <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>
        </div>


      </Router>
    </div>
  );
}

export default App;