import {signInWithEmailAndPassword} from "firebase/auth";
import {auth } from "./firebaseConfig";

export function singInEmail(email, pass){
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((res) => {
            // console.log(res)
            resolve(res);
        })
        .catch((error) => {
            // console.log(error)
           reject(error)
        })
    })
 
}
