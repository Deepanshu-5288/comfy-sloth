import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/cart_context';
import { FilterProvider } from './context/filter_context';
import { ProductsProvider } from './context/products_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
    <ProductsProvider>
      <FilterProvider >
      <CartProvider >
    <App />
    </CartProvider>
    </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
