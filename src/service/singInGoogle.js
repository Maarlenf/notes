import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";

export function singInGoogle() {
  const provider = new GoogleAuthProvider();
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
    .then((res) => {
     const user = res.currentUser;
     resolve(user);
    })
    .catch((error) => {
      reject(error);
    });
  })
}
