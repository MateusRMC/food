"use client";
import FridgeItems from "./fridgeItems";

export default function Fridge({ items }) {
  return (
    <div className="fridgeContainer">
      <div className="fridgeHeader">
        <div className="greetings">
          <h1>Fridge</h1>
          <p>You have: {items.length} items</p>
        </div>
      </div>
      <button className="addItemsButton">Add items</button>

      <FridgeItems items={items} />
    </div>
  );
}
