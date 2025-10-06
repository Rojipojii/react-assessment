import { useState, useEffect } from "react";
import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";

function App() {
  const [items, setItems] = useState([]);
  console.log(items);
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState("");

  function addItem() {
    if (newItem.trim() === "") {
      setError("Item cannot be empty");
      return;
    }
    if (
      items.some((item) => item.name.toLowerCase() === newItem.toLowerCase())
    ) {
      setError("Item already exists");
      return;
    }
    setItems((prevItems) => [...prevItems, { name: newItem, checked: false }]);
    setNewItem("");
    setError("");
  }

  function removeItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }
  
  function toggleItem(index) {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button onClick={addItem} className="v__button">
          Add
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="v__list-container overflow-y-scroll">
        {/* Map your data here: */}
        {/* <ShoppingListItem /> */}
        {/* <ShoppingListItem /> */}
        {items.map((item, index) => (
          <ShoppingListItem
            key={index}
            name={item.name}
            checked={item.checked}
            onToggle={() => toggleItem(index)}
            onRemove={() => removeItem(index)}
          />
        ))}
      </div>
      <div>
        <p>
          Checked: {items.filter((item) => item.checked).length}/{items.length}
        </p>
      </div>
    </div>
  );
}

export default App;
