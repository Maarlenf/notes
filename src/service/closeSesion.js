import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const closeSesion = () => signOut(auth);
