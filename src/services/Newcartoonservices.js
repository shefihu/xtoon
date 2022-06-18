// import { db } from "../config/firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";
const newCollectionRef = collection(db, "New cartoons");
class NewCartoonService {
  addNewCartoon = (newCartoon) => {
    return addDoc(newCollectionRef, newCartoon);
  };
  updateNewCartoon = (id, updatedCartoon) => {
    const Newcartoondoc = doc(db, "New cartoons", id);
    return updateDoc(Newcartoondoc, updatedCartoon);
  };
  deleteNewCartoon = (id) => {
    const Newcartoondoc = doc(db, "New cartoons", id);
    return deleteDoc(Newcartoondoc);
  };
  getAllNewCartoon = () => {
    return getDocs(newCollectionRef);
  };
  getNewCartoon = (id) => {
    const Newcartoondoc = doc(db, "New cartoons", id);
    return getDoc(Newcartoondoc);
  };
}
export default new NewCartoonService();
