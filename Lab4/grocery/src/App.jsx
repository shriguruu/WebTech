// This is a simple React web application that displays the grocery data
import './App.css'; // For styling
import { fruitsData } from './data/GroceryData';
import { vegetablesData } from './data/GroceryData';
import ItemCategory from './components/ItemCategory';


function App() {
  return (
    <div className="app-container">
      <h1>Grocery</h1>
      <div className="lists-wrapper">
        <ItemCategory title="Fruits" items={fruitsData} />
        <ItemCategory title="Vegetables" items={vegetablesData} />
      </div>
    </div>
  );
}

export default App;