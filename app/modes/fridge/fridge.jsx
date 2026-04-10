"use client";
import FridgeItems from "./fridgeItems";

export default function Fridge() {
  return (
    <div className="fridgeContainer">
      <div className="fridgeHeader">
        <h1>Fridge</h1>
        <p>manage the items in your fridge</p>
      </div>
      <div className="fridgeMenu">
        <button>All items</button>
        <button>Proteins</button>
        <button>Carbs</button>
        <button>Fats</button>
        <button>+</button>
      </div>
      <div className="contentArea">
        <FridgeItems />
      </div>
    </div>
  );
}
