import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchStores() {
  const [location, setLocation] = useState('');
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch stores from the backend
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stores'); // Replace with your backend endpoint
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  const handleSearch = (e) => {
    setLocation(e.target.value);
    if (e.target.value === '') {
      setFilteredStores([]);
    } else {
      const filtered = stores.filter(store =>
        store.location.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredStores(filtered);
    }
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Search Stores</h2>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleSearch}
      />
      
      {filteredStores.length > 0 && (
        <div>
          <h3>Stores in {location}</h3>
          {filteredStores.map(store => (
            <div key={store.id} style={{ marginBottom: '20px' }}>
              <h4>{store.name} - {store.location}</h4>
              <div>
                {store.products.map(product => (
                  <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>{product.name} - ${product.price}</span>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div>
        <h3>Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default SearchStores;
