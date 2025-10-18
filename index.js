import { initializeApp } from 'firebase/app';
import FIREBASE_CONFIG from './firebase-config.json' with { type: 'json' };

const app = initializeApp(FIREBASE_CONFIG);

console.log("Firebase app initialized successfully.");