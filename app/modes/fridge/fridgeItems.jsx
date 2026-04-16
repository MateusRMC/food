"use client";

export default function FridgeItems({ items }) {
  return (
    <div className="itemsList">
      <h3 style={{ margin: "10px" }}>Items</h3>
      <div className="fridgeMenu">
        <button>All items</button>
        <button>Proteins</button>
        <button>Carbs</button>
        <button>Fats</button>
        <button>+</button>
      </div>
      {items.map((i) => (
        <div className="itemCard" key={i.id}>
          <div className="itemName">
            <span>
              {i.name} <small style={{ color: "#808080" }}>(100g)</small>
            </span>
          </div>
          <div className="itemMacros">
            <div className="macroContainer">
              <span>K: {i.kcal}</span>
            </div>
            <div className="macroContainer">
              <span>G: {i.fat}</span>
            </div>
            <div className="macroContainer">
              <span>C: {i.carb}</span>
            </div>
            <div className="macroContainer">
              <span>P: {i.protein}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
