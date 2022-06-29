import { useEffect, useState } from 'react';
import './index.css';

function GetOutOfStockProducts() {
  const [inventoryValue, setInventoryValue] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => {
        setInventoryValue(data);
      });
  });
  return (
    <div className='App'>
      <h1 className='title'>Lista de produtos sem estoque</h1>
      <ul className='list'>
        {inventoryValue?.map((inventory) => {
          return (
            <li className='list-item' key={inventory.id}>
              <span className='list-nostock'>
                {inventory.stock === 0 ? inventory.name : ''}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GetOutOfStockProducts;
