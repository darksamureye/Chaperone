import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { User } from '../types/audio';
import { useAuth } from '../store/authStore';

export const signUp = async (
  email: string,
  password: string,
  name: string,
  role: 'parent' | 'child'
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user: User = {
    id: userCredential.user.uid,
    email,
    name,
    role
  };

  await setDoc(doc(db, 'users', user.id), user);
  return user;
};

export const signIn = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
  return userDoc.data() as User;
};

export const signOut = async (): Promise<void> => {
  await firebaseSignOut(auth);
  useAuth.getState().setUser(null);
};

export const initializeAuth = (): void => {
  onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      const user = userDoc.data() as User;
      useAuth.getState().setUser(user);
    } else {
      useAuth.getState().setUser(null);
    }
  });
};