import { useState } from "react";
import styles from "./ProductList.module.css";

const mockProducts = [
  { id: 1, name: "Mechanical Keyboard", price: 299.9 },
  { id: 2, name: "Gaming Mouse", price: 149.9 },
  { id: 3, name: "27'' Monitor 144Hz", price: 1399.0 },
  { id: 4, name: "USB Headset 7.1", price: 199.9 },
];

const ProductList = () => {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className={styles.container}>
      <h2>Product List</h2>
      This is a list from remote-product-list app.
      <p>Items in cart: {cart.length}</p>
      <div className={styles.list}>
        {mockProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
