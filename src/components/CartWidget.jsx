import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext'; // Importa el contexto del carrito

const CartWidget = () => {
  const { cartItems } = useContext(CartContext); // Obtén el estado del carrito desde el contexto

  // Calcula la cantidad total de elementos en el carrito sumando la cantidad de cada artículo
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge bg-primary">{totalItems}</span>
    </div>
  );
};

export default CartWidget;
