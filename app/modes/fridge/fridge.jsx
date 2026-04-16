"use client";
import { useState } from "react";
import FridgeItems from "./fridgeItems";
import AddItemForm from "@/app/components/addItemForm";

export default function Fridge({ items, getItems }) {
  const [toggleAddItems, setToggleAddItems] = useState(false);

  return (
    <div className="fridgeContainer">
      <div className="fridgeHeader">
        <div className="greetings">
          <h1>Fridge</h1>
          <p>You have: {items.length} items</p>
        </div>
      </div>
      <div className="fridgeContentContainer">
        <button className="toggleAddItems" onClick={() => setToggleAddItems(true)}>
          +
        </button>
        {toggleAddItems ? (
          <div className="overlay">
            <AddItemForm
              toggleAddItems={toggleAddItems}
              setToggleAddItems={setToggleAddItems}
              getItems={getItems}
            />
          </div>
        ) : (
          ""
        )}
        <FridgeItems items={items} />
      </div>
    </div>
  );
}
