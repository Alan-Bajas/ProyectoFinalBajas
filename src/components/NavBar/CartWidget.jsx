import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function CartWidget() {
  const { getTotalUnits } = useContext(CartContext);
  const units = getTotalUnits();

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      🛒 <strong>{units}</strong>
    </Link>
  );
}
