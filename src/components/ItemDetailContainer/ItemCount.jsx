import { useState } from "react";

export default function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const dec = () => setCount((c) => (c > 1 ? c - 1 : c));
  const inc = () => setCount((c) => (c < stock ? c + 1 : c));

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 10 }}>
      <button onClick={dec} disabled={count === 1}>-</button>
      <span style={{ minWidth: 24, textAlign: "center" }}>{count}</span>
      <button onClick={inc} disabled={count === stock}>+</button>
      <button onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}
