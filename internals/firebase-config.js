import admin from 'firebase-admin';
import serviceAccount from '../serviceAccount';
import { Firestore } from '@google-cloud/firestore';

let firestore = null;
// const firestore = new Firestore();
export function initializeFirebase() {
  return new Promise((resolve) => {

    const firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    firestore = admin.firestore();
    resolve(firebaseApp);
  });
}

export {
  firestore,
}
