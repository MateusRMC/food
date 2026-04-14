"use client";
import FridgeItems from "./fridgeItems";

export default function Fridge({ items }) {
  return (
    <div className="fridgeContainer">
      <div className="fridgeHeader">
        <div className="greetings">
          <h1>Fridge</h1>
          <p>Manage your items</p>
        </div>
        <div className="fridgeMenu">
          <button>All items</button>
          <button>Proteins</button>
          <button>Carbs</button>
          <button>Fats</button>
          <button>+</button>
        </div>
      </div>
      <div className="contentArea">
        <FridgeItems items={items} />
      </div>
    </div>
  );
}
