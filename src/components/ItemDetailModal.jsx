import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ItemDetailContainer } from './ItemDetailContainer';

const ItemDetailModal = ({ id, show, handleClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000); // Oculta la alerta después de 2 segundos
  };

  const modalHeaderStyle = {
    borderBottom: 'none',
  };

  const modalFooterStyle = {
    borderTop: 'none',
    display: 'flex',
    justifyContent: 'center',
  };

  const modalFooterButtonsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const modalFooterButtonStyle = {
    margin: '0 5px',
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={modalHeaderStyle}>
        <Modal.Title>Detalles del Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ItemDetailContainer id={id} />
      </Modal.Body>
      <Modal.Footer style={modalFooterStyle}>
        <div className="modal-footer-buttons" style={modalFooterButtonsStyle}>
          {addedToCart ? (
            <div className="alert alert-success" role="alert">
              Producto agregado al carrito exitosamente
            </div>
          ) : (
            <>
              <Button variant="primary" onClick={handleDecrement} style={modalFooterButtonStyle}>-</Button>
              <span>{quantity}</span>
              <Button variant="primary" onClick={handleIncrement} style={modalFooterButtonStyle}>+</Button>
              <Button variant="primary" onClick={handleAddToCart} style={modalFooterButtonStyle}>Agregar al carrito</Button>
            </>
          )}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemDetailModal;
