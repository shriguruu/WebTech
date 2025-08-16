// ItemCategory component which displays the category of the grocery and the corresponding items.
import ItemList from "./ItemList";
export default function ItemCategory({ title, items }) {
  return (
    <div className="list-container">
      <h2 className="list-header">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <ItemList key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}