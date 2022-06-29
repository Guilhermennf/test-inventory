import React from 'react';
import ReactDOM from 'react-dom/client';
import GetInventoryValue from './Components/GetInventoryValue';
import GetOutOfStockProducts from './Components/GetOutOfStockProducts';
import SortByPriceAsc from './Components/SortByPriceAsc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GetInventoryValue />
    <SortByPriceAsc />
    <GetOutOfStockProducts />
  </React.StrictMode>,
);
