import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDd6e22QGY_cU60-6DdAoLPiKah2ojmmzg',
  authDomain: 'kpi-test-b216c.firebaseapp.com',
  projectId: 'kpi-test-b216c',
  storageBucket: 'kpi-test-b216c.appspot.com',
  messagingSenderId: '318753312901',
  appId: '1:318753312901:web:8c38c68e800977b78459ec',
  measurementId: 'G-6CWLJB3SF0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
