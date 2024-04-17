import { useState } from "react";
export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [val, setVal] = useState(1);

  //The e is an event object sent by react
  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;

    const newItem = {
      description: desc,
      quantity: val,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDesc("");
    setVal(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🏖️</h3>
      <select value={val} onChange={(e) => setVal(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
