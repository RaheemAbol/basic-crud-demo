import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemList = ({ newItem }) => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, [newItem]);

  const handleEditClick = (item) => {
    setEditItem(item);
    setName(item.name);
    setQuantity(item.quantity);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/items/${editItem._id}`,
        { name, quantity }
      );
      setItems(
        items.map((item) => (item._id === editItem._id ? response.data : item))
      );
      setEditItem(null);
      setName("");
      setQuantity("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity}
            <button onClick={() => handleEditClick(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editItem && (
        <form onSubmit={handleUpdateSubmit}>
          <h2>Edit Item</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update Item</button>
        </form>
      )}
    </div>
  );
};

export default ItemList;
