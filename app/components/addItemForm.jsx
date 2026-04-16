"use client";

import { useState } from "react";

export default function AddItemForm({ getItems, toggleAddItems, setToggleAddItems }) {
  const [itemName, setItemName] = useState("");
  const [itemServing, setItemServing] = useState("");
  const [itemKcal, setItemKcal] = useState("");
  const [itemFat, setItemFat] = useState("");
  const [itemCarb, setItemCarb] = useState("");
  const [itemProtein, setItemProtein] = useState("");
  const [itemPotassium, setItemPotassium] = useState("");
  const [itemSodium, setItemSodium] = useState("");

  async function insertItems(e) {
    e.preventDefault();

    const rate = 100 / Number(itemServing);

    try {
      await fetch("/api/items/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: itemName,
          kcal: Number((Number(itemKcal) * rate).toFixed(1)),
          fat: Number((Number(itemFat) * rate).toFixed(1)),
          carb: Number((Number(itemCarb) * rate).toFixed(1)),
          protein: Number((Number(itemProtein) * rate).toFixed(1)),
          potassium: itemPotassium ? Number((Number(itemPotassium) * rate).toFixed(1)) : "",
          sodium: itemSodium ? Number((Number(itemSodium) * rate).toFixed(1)) : "",
        }),
      });

      setItemName("");
      setItemServing("");
      setItemKcal("");
      setItemFat("");
      setItemCarb("");
      setItemProtein("");
      setItemPotassium("");
      setItemSodium("");
      setToggleAddItems(false);

      await getItems();
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  }

  return (
    <form className="addItemForm" onSubmit={insertItems}>
      <h1 style={{ textAlign: "center" }}>Add a new item</h1>
      <input
        type="text"
        onChange={(e) => setItemName(e.target.value)}
        value={itemName}
        placeholder="Name"
      />
      <input
        type="number"
        onChange={(e) => setItemServing(e.target.value)}
        value={itemServing}
        inputMode="decimal"
        placeholder="Serving (g or ml)"
        required
      />
      <input
        type="number"
        onChange={(e) => setItemKcal(e.target.value)}
        value={itemKcal}
        inputMode="decimal"
        placeholder="Kcal"
        required
      />
      <input
        type="number"
        onChange={(e) => setItemFat(e.target.value)}
        value={itemFat}
        inputMode="decimal"
        placeholder="Fat"
        required
      />
      <input
        type="number"
        onChange={(e) => setItemCarb(e.target.value)}
        value={itemCarb}
        inputMode="decimal"
        placeholder="Carb"
        required
      />
      <input
        type="number"
        onChange={(e) => setItemProtein(e.target.value)}
        value={itemProtein}
        inputMode="decimal"
        placeholder="Protein"
        required
      />
      <input
        type="number"
        onChange={(e) => setItemPotassium(e.target.value)}
        value={itemPotassium}
        inputMode="decimal"
        placeholder="Potassium (optional)"
      />
      <input
        type="number"
        onChange={(e) => setItemSodium(e.target.value)}
        value={itemSodium}
        inputMode="decimal"
        placeholder="Sodium (optional)"
      />
      <input type="submit" value="Adicionar" />
      <small className="dismiss" onClick={() => setToggleAddItems(false)}>
        Return to items list
      </small>
    </form>
  );
}
