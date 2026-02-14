import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? 700 : 400,
});

export default function NavBar() {
  return (
    <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <nav style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Link to="/" style={{ textDecoration: "none", fontWeight: 800 }}>
          ProyectoFinalBajas
        </Link>

        <NavLink to="/" style={linkStyle}>
          Catálogo
        </NavLink>
        <NavLink to="/category/perifericos" style={linkStyle}>
          Periféricos
        </NavLink>
        <NavLink to="/category/audio" style={linkStyle}>
          Audio
        </NavLink>
        <NavLink to="/category/computacion" style={linkStyle}>
  Computación
</NavLink>
<NavLink to="/category/accesorios" style={linkStyle}>
  Accesorios
</NavLink>


        <div style={{ marginLeft: "auto" }}>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}
