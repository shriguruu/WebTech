// This is a React application which displays the products availability
import './App.css';
import {PRODUCTS} from './data/products.js';
import ProductTable from './components/ProductTable.jsx';
import SearchBar from './components/SearchBar.jsx';



// The entry point that renders our main component with the data.
export default function App() {
  return(
  <div className='container'>
    <h2>Product App</h2>
    <SearchBar/>
    <ProductTable products={PRODUCTS}/>
  </div>
  );
}