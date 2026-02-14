import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  const getTotalUnits = () => cart.reduce((acc, p) => acc + p.quantity, 0);
  const getTotalPrice = () =>
    cart.reduce((acc, p) => acc + p.quantity * p.price, 0);

  const value = useMemo(
    () => ({ cart, addItem, removeItem, clearCart, getTotalUnits, getTotalPrice }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
