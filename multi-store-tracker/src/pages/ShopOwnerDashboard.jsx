import React, { useState } from 'react';

const ShopOwnerDashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apples', price: 2 },
    { id: 2, name: 'Oranges', price: 3 },
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  // Handle input changes for adding a new product
  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new product to the inventory
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      setProducts([
        ...products,
        { id: products.length + 1, name: newProduct.name, price: parseFloat(newProduct.price) },
      ]);
      setNewProduct({ name: '', price: '' }); // Reset input fields
    }
  };

  // Handle updating a product
  const handleUpdateProduct = (id, updatedName, updatedPrice) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, name: updatedName, price: parseFloat(updatedPrice) } : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null); // Reset editing state
  };

  // Handle deleting a product
  const handleDeleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h2>Shop Owner Dashboard</h2>

      {/* Add New Product */}
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Current Inventory */}
      <h3>Current Inventory:</h3>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {editingProduct === product.id ? (
                <div>
                  <input
                    type="text"
                    defaultValue={product.name}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="number"
                    defaultValue={product.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <button
                    onClick={() =>
                      handleUpdateProduct(
                        product.id,
                        editingProduct.name,
                        editingProduct.price
                      )
                    }
                  >
                    Save
                  </button>
                  <button onClick={() => setEditingProduct(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  {product.name} - ${product.price.toFixed(2)}
                  <button onClick={() => setEditingProduct(product.id)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products in inventory.</p>
      )}
    </div>
  );
};

export default ShopOwnerDashboard;
