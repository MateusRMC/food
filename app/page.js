"use client";

import { useState } from "react";
import Fridge from "./modes/fridge/fridge";

export default function Home() {
  const [mode, setMode] = useState("Fridge");

  return (
    <>
      <div className="showArea">{mode === "Fridge" && <Fridge />}</div>
      <div className="menu">
        <button onClick={() => setMode("Fridge")}>Fridge</button>
        <button onClick={() => setMode(2)}>COMP2</button>
      </div>
    </>
  );
}
