import { useEffect, useState } from 'react';
import './index.css';

function SortByPriceAsc() {
  const [inventoryValue, setInventoryValue] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => {
        setInventoryValue(data);
        data.sort(function (a, b) {
          return a.price - b.price;
        });
        setInventoryValue(data);
      });
  });
  return (
    <div className='App'>
      <h1 className='title'>
        Lista de produtos com estoque <br />e com preço em ordem crescente
      </h1>
      <ul className='list'>
        {inventoryValue?.map((inventory) => {
          return (
            <li className='list-item' key={inventory.id}>
              <span className='list-stock'>
                {inventory.stock > 0
                  ? inventory.name
                  : inventory.name + '\n - Sem estoque'}
              </span>
              <br />
              <span>
                {inventory.stock > 0 ? 'R$' : ''}
                {inventory.price && inventory.stock > 0 ? inventory.price : ''}
                {inventory.stock > 0 ? ',00' : ''}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SortByPriceAsc;
