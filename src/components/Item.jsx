import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../styles/Item.css';

export const Item = ({ product }) => (
  <div className="custom-card-container">
    <div className="custom-card">
      <img src={product.image} alt={product.title} className="custom-card-img" />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{product.title}</h5>
        <p className="custom-card-text">{product.description}</p>
        <p className="custom-card-price">${product.price}</p>
        <div className="custom-card-buttons">
          <Link to={`/item/${product.id}`} className="btn btn-primary">Detalles</Link>
        </div>
      </div>
    </div>
  </div>
);
