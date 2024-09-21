import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/style.scss'
import App from './App';
import './i18n/i18next.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import store from './tools/store/store.js';
import { Provider } from 'react-redux';
import { callProduct } from './config/defaultFunc.js';
import { callCategory } from './config/defaultFunc.js';
import { userdata } from './config/defaultFunc.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { CartProvider } from 'react-use-cart';


userdata();
callProduct()
callCategory();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ChakraProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </ChakraProvider>
  </Provider>
);