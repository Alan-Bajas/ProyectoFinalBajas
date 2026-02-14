import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <main style={{ padding: 16 }}>
        <h2>Carrito</h2>
        <p>Carrito vacío.</p>
        <Link to="/">Ir al catálogo</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 16 }}>
      <h2>Carrito</h2>

      <section style={{ display: "grid", gap: 12 }}>
        {cart.map((p) => (
          <CartItem key={p.id} item={p} />
        ))}
      </section>

      <h3 style={{ marginTop: 16 }}>Total: ${getTotalPrice()}</h3>

      <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout">Ir a checkout</Link>
      </div>
    </main>
  );
}
