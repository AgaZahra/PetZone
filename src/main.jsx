import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/style.scss';
import App from './App';
import './i18n/i18next.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import store from './tools/store/store.js';
import { Provider } from 'react-redux'; // Provider idxalı
import { callProduct, callCategory, userdata } from './config/defaultFunc.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from 'react-use-wishlist'; // WishlistProvider idxalı
// import 'react-credit-cards-2/lib/styles-compiled.css'; 
import 'react-credit-cards-2/dist/lib/styles-compiled.css'; 



userdata();
callProduct();
callCategory();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <CartProvider>
        <WishlistProvider> 
          <App />
        </WishlistProvider>
      </CartProvider>
    </ChakraProvider>
  </Provider>
);
