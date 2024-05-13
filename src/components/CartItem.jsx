import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/config";
import { useCart } from "../context/CartContext"; // Importamos el contexto del carrito
import "../styles/CartItem.css";

const CartItem = ({ item, quantity }) => {
  const [imageURL, setImageURL] = useState("");
  const { removeFromCart } = useCart(); // Utilizamos la función removeFromCart del contexto

  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        const docRef = doc(db, "items", item.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setImageURL(data.image);
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchImageURL();
  }, [item.id]);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img className="cart-item-image" src={imageURL} alt={item.title} />
      </div>
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio unitario: ${item.price}</p>
      </div>
      <div className="cart-buttons">
        <button className="btn-remove" onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
