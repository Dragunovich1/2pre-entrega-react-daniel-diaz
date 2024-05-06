import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ItemDetailModal from './ItemDetailModal';

const Item = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="custom-card-container">
      <div className="custom-card">
        <img src={product.pictureUrl} alt={product.title} className="custom-card-img" />
        <div className="custom-card-body">
          <h5 className="custom-card-title">{product.title}</h5>
          <p className="custom-card-text">{product.description}</p>
          <p className="custom-card-price">${product.price}</p>
          <div className="custom-card-buttons">
            <Button variant="primary" onClick={handleOpenModal}>Ver Detalles</Button>
          </div>
        </div>
      </div>
      <ItemDetailModal id={product.id} show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Item;
