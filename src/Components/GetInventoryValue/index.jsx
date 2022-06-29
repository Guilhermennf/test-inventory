import { useEffect, useState } from 'react';
import './index.css';

function GetInventoryValue() {
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
      <h1 className='title'>Inventário</h1>
      <ul className='list'>
        {inventoryValue?.map((inventory) => {
          return (
            <li className='list-item' key={inventory.id}>
              <span className='list-title'>{inventory.name}</span>
              <br />

              <span className='list-value'>
                Valor do produto: R${inventory.price},00
              </span>
              <br />
              <span className='list-quantity'>
                Quantidade do estoque vezes o preço:
                {inventory.price * inventory.stock}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GetInventoryValue;
