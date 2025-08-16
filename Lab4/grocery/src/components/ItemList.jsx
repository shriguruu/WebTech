// Item component which lists the name and price
export default function ItemList({ name, price }) {
  return (
    <p>
      {name}: {price}
    </p>
  );
}