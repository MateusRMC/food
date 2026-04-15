"use client";

import { useEffect, useState } from "react";
import Fridge from "./modes/fridge/fridge";

export default function Home() {
  const [mode, setMode] = useState("Fridge");
  const [items, setItems] = useState([]);

  async function getItems() {
    const req = await fetch("/api/items/");
    const res = await req.json();

    setItems(res);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="showArea">{mode === "Fridge" && <Fridge items={items} />}</div>
      <div className="menu">
        <button className={mode === "Fridge" ? "menuActive" : ""} onClick={() => setMode("Fridge")}>
          <img src="/fridge.svg" />
        </button>
        <button className={mode === "Kitchen" ? "menuActive" : ""} onClick={() => setMode("Kitchen")}>
          <img src="pan.svg" />
        </button>
        <button className={mode === "Meal" ? "menuActive" : ""} onClick={() => setMode("Meal")}>
          <img src="meal.svg" />
        </button>
      </div>
    </>
  );
}
