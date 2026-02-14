import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <article style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 10 }}
      />
      <h3 style={{ margin: "10px 0 6px" }}>{item.title}</h3>
      <p style={{ margin: 0 }}>
        <strong>${item.price}</strong>
      </p>
      <p style={{ margin: "6px 0 10px", opacity: 0.8 }}>Stock: {item.stock}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </article>
  );
}
