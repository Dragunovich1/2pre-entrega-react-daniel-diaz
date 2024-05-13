import React, { useState, useEffect } from 'react';
import brandLogo from '../assets/logo_claro.png';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../data/config';
import ItemList from './ItemList';

const MainContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setProducts(items);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="main-content">
      <div>
        <img src={brandLogo} className="logo" alt="Retro Store Logo" />
      </div>
      <div className="container mt-4">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default MainContent;
