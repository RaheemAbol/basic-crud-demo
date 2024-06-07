import React, { useState } from "react";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";

const App = () => {
  const [newItem, setNewItem] = useState(null);

  const handleAddItem = (item) => {
    console.log("Item added:", item); // Debug log
    setNewItem(item); // Update state when a new item is added
  };

  return (
    <div className="App">
      <h1>My Fullstack Application</h1>
      <ItemList newItem={newItem} />
      <ItemForm onAddItem={handleAddItem} />
    </div>
  );
};

export default App;
