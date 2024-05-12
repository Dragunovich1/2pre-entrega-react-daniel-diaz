import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../data/config";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(
        collection(db, "items"),
        where("category", "==", categoryName)
      );

      const querySnapshot = await getDocs(q);

      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });

      setProducts(items);
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <Container className='mt-4'>
      <ItemList products={products} />
    </Container>
  );
};

export default ItemListContainer;
