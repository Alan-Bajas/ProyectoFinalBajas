import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <section
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      }}
    >
      {items.map((p) => (
        <Item key={p.id} item={p} />
      ))}
    </section>
  );
}
