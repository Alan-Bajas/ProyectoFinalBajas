import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

export async function getProducts(categoryId) {
  const ref = collection(db, "products");
  const q = categoryId ? query(ref, where("category", "==", categoryId)) : ref;
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getProductById(itemId) {
  const ref = doc(db, "products", itemId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}
