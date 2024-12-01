import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
  AuthError
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './config';
import { User } from '../../types/audio';
import { useAuth } from '../../store/authStore';

export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
    if (!userDoc.exists()) {
      throw new Error('User data not found');
    }
    const userData = userDoc.data() as User;
    useAuth.getState().setUser(userData);
    return userData;
  } catch (error) {
    const authError = error as AuthError;
    console.error('Sign in error:', authError);
    throw new Error(authError.code === 'auth/invalid-credential' 
      ? 'Invalid email or password'
      : 'Failed to sign in');
  }
};

export const signUp = async (
  email: string,
  password: string,
  name: string,
  role: 'parent' | 'guardian'
): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user: User = {
      id: userCredential.user.uid,
      email,
      name,
      role
    };

    await setDoc(doc(db, 'users', user.id), user);
    useAuth.getState().setUser(user);
    return user;
  } catch (error) {
    console.error('Sign up error:', error);
    throw new Error('Failed to create account');
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
    useAuth.getState().setUser(null);
  } catch (error) {
    console.error('Sign out error:', error);
    throw new Error('Failed to sign out');
  }
};

export const initializeAuth = (): void => {
  onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      try {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const user = userDoc.data() as User;
          useAuth.getState().setUser(user);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        useAuth.getState().setUser(null);
      }
    } else {
      useAuth.getState().setUser(null);
    }
  });
};