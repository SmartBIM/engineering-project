import React from 'react'
import { render } from 'react-dom'
import { Router, Link } from '@reach/router'
import { Provider } from 'react-redux'
import store from './stuff/store'

import Home from './components/Home/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'

const App = () => (
  <div>
    <h1>Concora UI Test</h1>
    <nav>
      <Link to='/'>Home</Link>
    </nav>

    <Router>
      <Home path='/' />
      <ProductDetail path='/products/:productId' />
    </Router>
  </div>
)

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
