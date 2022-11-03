import { initializeApp } from "firebase/app";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SOTRAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const auth = getAuth(app);

// 회원가입
export async function firebaseSignUp(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password);
}

// 로그인
export async function firebaseSignIn(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password);
}

// 로그아웃
export async function firebaseSignOut() {
  await signOut(auth);
}

export async function getFirebaseToken() {
  return await auth.currentUser?.getIdToken();
}

export async function uploadMyUserAvatar(file: File) {
  const storageRef = ref(storage, auth.currentUser?.uid);
  await uploadBytes(storageRef, file);
}

export async function getUserAvatar(uid: string) {
  return await getDownloadURL(ref(storage, uid));
}
