import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(item, qty);
    setAdded(true);
  };

  return (
    <section style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 12 }}
      />

      <div>
        <h2 style={{ marginTop: 0 }}>{item.title}</h2>
        <p style={{ opacity: 0.85 }}>{item.description}</p>
        <p>
          <strong>${item.price}</strong>
        </p>
        <p>Stock: {item.stock}</p>

        {item.stock === 0 ? (
          <p style={{ fontWeight: 700 }}>Producto sin stock</p>
        ) : added ? (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ fontWeight: 700 }}>Agregado ✅</span>
            <Link to="/cart">Ir al carrito</Link>
          </div>
        ) : (
          <ItemCount stock={item.stock} onAdd={handleAdd} />
        )}

        <div style={{ marginTop: 12 }}>
          <Link to="/">← Volver</Link>
        </div>
      </div>
    </section>
  );
}
