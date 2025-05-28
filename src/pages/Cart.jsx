import { useCart } from '../store/cartContext';
import { useState } from 'react';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleOrder() {
    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) return <div>Order placed! (virtual payment processed)</div>;

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} — ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={handleOrder}>Checkout</button>}
    </div>
  );
}
