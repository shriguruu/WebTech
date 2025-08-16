// ProductTable component which displays the entire table of products.
import ProductRow from './ProductRow.jsx';
import ProductCategoryRow from './ProductCategoryRow.jsx';

export default function ProductTable({ products}) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {

    // Add category row if it's a new category
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    // Add the product row
    rows.push(<ProductRow product={product} key={product.name} />);
    
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}