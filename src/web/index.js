import React from 'react'
import { render } from 'react-dom'
import { Router, Link } from '@reach/router'
import { Provider } from 'react-redux'
import store from './stuff/store'
import HomeView from './views/HomeView'
import ProductDetailView from './views/ProductDetailView'

const App = () => {
  return (
    <div>
      <h1>Concora UI Test</h1>
      <nav>
        <Link to='/'>Home</Link>
      </nav>

      <Router>
        <HomeView path='/' />
        <ProductDetailView path='/products/:productId' />
      </Router>
    </div>
  )
}

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
