// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import schedule from 'node-schedule'
import { getFirestore, addDoc, collection } from 'firebase/firestore';

export default function handler(req, res) {
  // Import the functions you need from the SDKs you need
  const apiKey = 'AIzaSyBuYX4EFObo1KGjFGuMLafYs3mDXVl9NuU';
  const authDomain = 'react-firebase-movie-reviews.firebaseapp.com';
  const projectId = 'react-firebase-movie-reviews';
  const storageBucket = 'react-firebase-movie-reviews.appspot.com';
  const messagingSenderId = 86112699964;
  const appId = '1:86112699964:web:b8e1f6ec723cc5af9fa539';
  const measurementId = 'G-XMTLE3YE3Z';
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,

};


 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
 const auth = getAuth(app);
 const date = new Date(2022, 8, 21, 13, 10, 0);

 const job =  schedule.scheduleJob(date, function () {
    const database = getFirestore();
    const reviewsRef = collection(database, 'reviews');
    addDoc(reviewsRef, {
      content:`This content was scheaduled for ${date}`,
      author: `/users/1`,
      authorUsername: 'me',
      movieId:1
    });
    job.cancel();
  console.log('The world is going to end today.');
});
  res.status(200).json({ name: 'John Doe' })
}
