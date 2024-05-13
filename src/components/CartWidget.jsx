import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { getTotalItems } = useCart();

  return (
    <div>
      <FaShoppingCart size={30} />
      {getTotalItems() > 0 && (
        <span className="badge">{getTotalItems()}</span>
      )}
    </div>
  );
};

export default CartWidget;
