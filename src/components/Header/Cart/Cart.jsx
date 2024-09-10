import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from '../../../reducers/cartReducer.js'; // Update with the correct path to cartSlice

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="absolute right-0 top-20 bg-white border border-gray-300 shadow-lg rounded-lg w-64 p-4 z-50">
      <h2 className="text-lg font-bold mb-2">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <img src={item.thumbnail} alt={item.title} className="w-10 h-10 object-cover mr-2" />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
              <FontAwesomeIcon 
                icon={faTrash} 
                className="text-red-500 cursor-pointer ml-2" 
                onClick={() => handleRemoveItem(item.id)} 
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;


