import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebaseConfig";

export function addAcount(email, pass){
   return createUserWithEmailAndPassword(auth, email, pass)
}