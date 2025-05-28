import { useCart } from '../store/cartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function handleOrder() {
    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) {
    return (
      <div className="max-w-md mx-auto mt-12 p-6 bg-green-50 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-2xl font-bold text-green-700 mb-2">Order Placed!</h2>
        <p className="text-gray-600">Your virtual payment has been processed.</p>
        <p className="mt-4 text-gray-600">Thank you for your purchase!</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <Link 
            to="/catalog" 
            className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {cart.map((item, i) => (
            <li key={i} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-gray-200 rounded-md w-16 h-16 flex items-center justify-center">
                    {/* Placeholder for product image */}
                    <span className="text-gray-400 text-xs">Image</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                  aria-label="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-gray-700">Subtotal</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-gray-700">Shipping</span>
            <span className="font-bold">Free</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={clearCart}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Clear Cart
            </button>
            <button 
              onClick={handleOrder}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}