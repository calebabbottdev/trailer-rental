import * as express from 'express';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const app = express();
export const db = admin.firestore();
