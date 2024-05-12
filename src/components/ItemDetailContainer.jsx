import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/config";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../styles/ItemDetail.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < parseInt(product.stock)) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    // Implementar lógica para agregar productos al carrito
    console.log(`Se agregarán ${quantity} unidades del producto "${product.title}" al carrito.`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Container className='item-detail-container mt-4'>
      <h1 className='item-detail-title'>{product.title}</h1>
      <img src={product.image} alt="Product" className='item-detail-image' />
      <p className='item-detail-description'>{product.description}</p>
      <p className='item-detail-stock'>Stock disponible: {product.stock}</p>
      <p className='item-detail-price'>${product.price}</p>
      {!isAddingToCart && (
        <div className="item-detail-quantity mb-3">
          <Button variant="primary btn-sm" onClick={handleDecrement}>-</Button>
          <span className="mx-2">{quantity}</span>
          <Button variant="primary btn-sm" onClick={handleIncrement}>+</Button>
        </div>
      )}
      {!isAddingToCart ? (
        <Button variant="primary" onClick={handleAddToCart}>Agregar al carrito</Button>
      ) : (
        <Link to="/cart" as={NavLink} >
          <Button variant="success">Finalizar compra</Button>
        </Link>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
