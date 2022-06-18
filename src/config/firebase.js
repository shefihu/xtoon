// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { doc, getFirestore, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBtSjnZwb4fW2g-LHj0BgkSgm9ydpSX80k",
  authDomain: "cartoon-tracker.firebaseapp.com",
  projectId: "cartoon-tracker",
  storageBucket: "cartoon-tracker.appspot.com",
  messagingSenderId: "779548215581",
  appId: "1:779548215581:web:a963b3adfbaf53cc8179f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export const AddtonewCartoons = async (cartoon) => {
  const data = {
    description: cartoon.description,
    details: cartoon.details,
    imageURL: cartoon.imageURL,
    name: cartoon.name,
    seasons: cartoon.seasons,
    // ratings: [],
  };
  try {
    const docRef = await setDoc(
      doc(db, "New cartoons", `${cartoon.name}`),
      data
    );
    console.log("successfully added", data);
  } catch (error) {
    console.log(error, "yeahh");
  }
};
