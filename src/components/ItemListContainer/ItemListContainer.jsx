import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../../services/productService";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

getProducts(categoryId)
      .then((data) => mounted && setItems(data))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [categoryId]);

  if (loading) return <p style={{ padding: 16 }}>Cargando productos…</p>;

  if (items.length === 0) {
    return <p style={{ padding: 16 }}>No hay productos en esta categoría.</p>;
  }

  return (
    <main style={{ padding: 16 }}>
      <h2 style={{ marginBottom: 12 }}>
        {categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}
      </h2>
      <ItemList items={items} />
    </main>
  );
}
