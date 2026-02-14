import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/orderService";

export default function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBuyer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);
    setError(null);

    const order = {
      buyer,
      items: cart.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        quantity: p.quantity,
      })),
      total: getTotalPrice(),
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      setError("No se pudo generar la orden. Intenta nuevamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <main style={{ padding: 16 }}>
        <h2>Compra confirmada ✅</h2>
        <p>
          Tu id de orden es: <strong>{orderId}</strong>
        </p>
      </main>
    );
  }

  return (
    <main style={{ padding: 16 }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: 10, maxWidth: 420 }}
        >
          <input
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
            required
          />

          {error && <p style={{ fontWeight: 700 }}>{error}</p>}

          <p>
            Total: <strong>${getTotalPrice()}</strong>
          </p>

          <button disabled={loading}>
            {loading ? "Generando orden..." : "Confirmar compra"}
          </button>
        </form>
      )}
    </main>
  );
}
