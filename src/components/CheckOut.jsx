import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { clearCart, getCartTotal, cart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: ''
  });
  const [transactionId, setTransactionId] = useState(null);
  const [isTransactionComplete, setIsTransactionComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Limpiar carrito después de completar la compra
    clearCart();

    // Generar ID de transacción aleatorio
    const newTransactionId = generateTransactionId();
    setTransactionId(newTransactionId);
    setIsTransactionComplete(true);
  };

  const generateTransactionId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  // Verificar si el carrito está vacío
  const isCartEmpty = cart.length === 0;

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4">Checkout</h1>
      {!isTransactionComplete && (
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-3 col-form-label">Nombre:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-3 col-form-label">E-mail:</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="address" className="col-sm-3 col-form-label">Dirección:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="city" className="col-sm-3 col-form-label">Ciudad:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="postalCode" className="col-sm-3 col-form-label">Código Postal:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6">
              <button type="submit" className="btn btn-primary w-100" disabled={isCartEmpty}>
                {isCartEmpty ? 'Carrito vacío' : 'Finalizar Compra'}
              </button>
            </div>
          </div>
        </form>
      )}

      {isTransactionComplete && (
        <div className="mt-4">
          <div class="alert alert-success" role="alert">
           <h2>Compra realizada con exito, ID de transacción: {transactionId}</h2>
          </div>
          <Link to="/" className="btn btn-primary">Seguir Comprando</Link>
        </div>
      )}

      {!isTransactionComplete && (
        <div className="mt-5">
          <h2>Resumen del Carrito</h2>
          <p>Total: ${getCartTotal()}</p>
          <Link to="/cart" className="btn btn-secondary">Volver al Carrito</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
