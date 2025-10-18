import * as admin from 'firebase-admin';
import * as filesystem from 'fs/promises';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { initializeApp } from 'firebase/app';
import firebaseServiceAccount from './adminsdk-key.json' with { type: 'json' };
import FIREBASE_CONFIG from './firebase-config.json' with { type: 'json' };

const fileName = fileURLToPath(import.meta.url);
const directoryName = dirname(fileName);

console.log('Initialized url/path.');