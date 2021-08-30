import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import Header from './components/Header';
import Home from './views/Home';
import Product from './views/Product';
import { redTheme, whiteTheme, blueTheme } from './themes';

import { useSelector } from 'react-redux';
import { themeReducer } from './redux/themeReducer';

const store = createStore(themeReducer)

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>

        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;