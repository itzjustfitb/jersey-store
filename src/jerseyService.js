import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const fetchJerseysFromFirestoreOrAPI = async () => {
  const jerseysCollectionRef = collection(db, "jerseys");
  const querySnapshot = await getDocs(jerseysCollectionRef);
  const jerseys = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return jerseys;
};
