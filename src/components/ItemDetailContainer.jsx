import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import '../styles/ItemDetail.css'; // Importa el archivo de estilos CSS personalizados

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000);
    });

    get.then((data) => {
      const filter = data.find((p) => p.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

  const addToCart = () => {
    // Aquí puedes implementar la lógica para agregar el ítem al carrito
    console.log(`El ítem "${product.title}" ha sido agregado al carrito.`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Container className='item-detail-container mt-4'>
      <h1 className='item-detail-title'>{product.title}</h1>
      <img src={product.pictureUrl} alt="Product" className='item-detail-image' />
      <p className='item-detail-description'>{product.description}</p>
      <p className='item-detail-price'>${product.price}</p>
      <Button variant="primary" onClick={addToCart}>Agregar al carrito</Button>
    </Container>
  );
};
