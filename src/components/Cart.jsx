import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";
import '../styles/Cart.css';

const Cart = () => {
  const { cart, clearCart, getCartTotal, getTotalItems } = useCart();

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>El carrito está vacío.</p>
          <Link to="/" className="btn btn-primary">Seguir Comprando</Link>
        </div>
      ) : (
        <>
          {cart.map((cartItem) => (
            <CartItem key={cartItem.product.id} item={cartItem.product} quantity={cartItem.quantity} />
          ))}
          <p className="cart-total">Total: ${getCartTotal()}</p>
          <div className="cart-buttons">
            <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
            <span className="mx-2"></span>
            <Link to="/checkout" className="btn btn-primary">CheckOut</Link>
            <span className="mx-2"></span>
            <Link to="/" className="btn btn-primary">Seguir Comprando</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
