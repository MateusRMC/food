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
        <button onClick={() => setMode("Fridge")}>F</button>
        <button onClick={() => setMode("Kitchen")}>K</button>
        <button onClick={() => setMode("Eat")}>E</button>
      </div>
    </>
  );
}
