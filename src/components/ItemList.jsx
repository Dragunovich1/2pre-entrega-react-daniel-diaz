import { Item } from "./Item";
import '../styles/Item.css';

export const ItemList = ({ products }) => {
  return (
    <div className="item-list-row">
      {products.map((product) => (
        <div key={product.id} className="custom-card-container">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;