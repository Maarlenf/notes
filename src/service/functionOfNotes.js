import {
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    doc,
    deleteDoc,
  } from 'firebase/firestore';
  import { db, auth } from './firebaseConfig';

  export const watchUser = () => {
    const user = auth.currentUser;
    const inLine = user.email;
    const cutName = inLine.indexOf('@');
    const show = inLine.substring(0, cutName);
    return show;
  };

  const collectionNotes = collection(db, 'first-notes');
  //create keys of the note
  export const noteNew = (title, text) =>{
   return addDoc(collectionNotes,
  {
    title,
    text,
    date: new Date(),
    reminders: false,
    emailUser: watchUser(),
  });
  }

  export const querySnapshot = getDocs(collectionNotes);
  
  export const createSnapShot = (callback) => onSnapshot(query(collectionNotes, orderBy('date', 'desc')), callback);

  export const editNote = (id, title, text) =>  updateDoc((doc(collectionNotes, id)), {
    title, text
  })

  export const markAsReminder = (id, reminders) =>  updateDoc((doc(collectionNotes, id)), {
    reminders
  })

  export const deleteNote = (id) =>  deleteDoc(doc(collectionNotes, id))

  