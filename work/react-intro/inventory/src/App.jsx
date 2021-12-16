import { useState } from "react";
import ReOrder from "./ReOrder.jsx";
import "./App.css";

function App() {
  const [inventory, setInventory] = useState(0);

  const OnReorder = () => {
    setInventory(inventory + 5);
  };

  return (
    <div className="app">
      <p className="inventory__header">Current Inventory is: {inventory}</p>

      <nav className="button__nav">

        <button 
        onClick={() =>{ 
        setInventory(inventory + 1);
        }}>+</button>

      
        <button 
        onClick={() => setInventory(inventory - 1)}
        disabled = {!inventory}
        >-</button>
        
        { inventory === 0 ? 
        <ReOrder OnReorder = {OnReorder} /> : null}
      
      </nav>
    </div>
    
  );
}

export default App;
