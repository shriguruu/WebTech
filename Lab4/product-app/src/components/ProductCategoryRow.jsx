// ProductCategoryRow component which displays heading for a product category.
export default function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}