import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../../services/productService";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

getProductById(itemId)
      .then((data) => mounted && setItem(data))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [itemId]);

  if (loading) return <p style={{ padding: 16 }}>Cargando detalle…</p>;
  if (!item) return <p style={{ padding: 16 }}>Producto no encontrado.</p>;

  return (
    <main style={{ padding: 16 }}>
      <ItemDetail item={item} />
    </main>
  );
}
