import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function createOrder(order) {
  const ref = collection(db, "orders");
  const docRef = await addDoc(ref, { ...order, date: serverTimestamp() });
  return docRef.id;
}
