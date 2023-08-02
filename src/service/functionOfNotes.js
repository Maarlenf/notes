import {
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    doc,
  } from 'firebase/firestore';
  import { db, auth } from './firebaseConfig';

  console.log(auth);
  const collectionNotes = collection(db, 'first-notes');
  //create keys of the note
  export const noteNew = (title, text) => addDoc(collectionNotes,
  {
    title,
    text,
    date: new Date(),
    reminders: false,
  });

  export const querySnapshot = getDocs(collectionNotes);
  
  export const createSnapShot = (callback) => onSnapshot(query(collectionNotes, orderBy('date', 'desc')), callback);

  export const editNote = (id, title, text) => updateDoc((doc(db, 'first-notes', id)), {
    title, text
  })