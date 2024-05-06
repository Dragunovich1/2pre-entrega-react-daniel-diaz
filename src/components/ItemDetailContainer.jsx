import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import data from "../data/products.json";
import '../styles/ItemDetail.css';

export const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      resolve(data); // Resuelve la promesa inmediatamente con los datos
    });

    get.then((data) => {
      const filter = data.find((p) => p.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

  if (!product) return

  return (//Lo que se va a mostrar en el Modal con detalles del producto:
    <Container className='item-detail-container mt-4'>
      <h1 className='item-detail-title'>{product.title}</h1>
      <img src={product.pictureUrl} alt="Product" className='item-detail-image' />
      <p className='item-detail-description'>{product.description}</p>
      <p className='item-detail-price'>${product.price}</p>
    </Container>
  );
};
