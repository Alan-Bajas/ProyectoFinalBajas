import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  const subtotal = item.price * item.quantity;

  return (
    <article style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}>
      <h4 style={{ margin: 0 }}>{item.title}</h4>
      <p style={{ margin: "6px 0" }}>
        Cantidad: <strong>{item.quantity}</strong> — Subtotal: <strong>${subtotal}</strong>
      </p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </article>
  );
}
