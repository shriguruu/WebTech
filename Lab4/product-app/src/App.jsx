import React, { useState } from 'react';
import './App.css';
import {PRODUCTS} from './data/products.js';

// --- Component 1: ProductRow ---
// Displays a single product in a table row.
// The name is shown in red if the product is out of stock.
function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

// --- Component 2: ProductCategoryRow ---
// Displays heading for a product category.
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

// --- Component 3: ProductTable ---
// Displays the entire table of products, filtering them based on user input.
function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // Condition 1: Check if it matches the search text
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    // Condition 2: Check if it matches the "in stock" filter
    if (inStockOnly && !product.stocked) {
      return;
    }

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

// --- Component 4: SearchBar ---
// Provides the search input and the "Only show products in stock" checkbox.
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
}

// --- Component 5: FilterableProductTable (The main component) ---
// This component holds the state and puts all the other components together.
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}


// The entry point that renders our main component with the data.
export default function App() {
  return(
  <div className='container'>
    <h2>Product App</h2>
    <FilterableProductTable products={PRODUCTS} />
  </div>
  );
}