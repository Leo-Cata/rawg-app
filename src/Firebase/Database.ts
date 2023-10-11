import { app } from "./Firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

//initialize the database
export const db = getFirestore(app);

//try to add to the db in a collection called 'users'
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "ada",
//     last: "lovelace",
//     born: 1999,
//   });
//   console.log("doc written with id", docRef.id);
// } catch (error) {
//   console.log(error);
// }

// const setData = () => {
//   const docData = {
//     first: "matias",
//     middle: "leo",
//     last: "cata",
//   };
//   setDoc(doc(db, "users/leo"), docData);
// };
// setData();

// const setDataAsync = async () => {
//   const docDataAsync = {
//     first: "synced leo",
//     last: "synced matias",
//   };
//   try {
//     await setDoc(doc(db, "users/leo"), docDataAsync, { merge: true });
//     console.log("worked ");
//   } catch (error) {
//     console.log(error);
//   }
// };
// setDataAsync();

// queries through the snapshot and logs one by one their id and data
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });

//sets the collection from users
// const usersCollection = collection(db, "users");

//gets the collection
// try {
//   const querySnapshot = await getDocs(usersCollection);
//   const jsonData = {};
//iterates through it and adds the data to the doc.id as *userID*{data}
//   querySnapshot.forEach((doc) => {
//     jsonData[doc.id] = doc.data();
//   });

//   console.log(JSON.stringify(jsonData, null, 2));
// } catch (error) {
//   console.error("Error fetching data:", error);
// }

const readData = async () => {
  const snapshot = await getDoc(doc(db, "users/kTERpCkf0rFNTJcAECcM"));
  if (snapshot.exists()) {
    const docReadData = snapshot.data();
    console.log(`my data ${JSON.stringify(docReadData)}`);
  }
};

readData();
