import * as functions from 'firebase-functions';
import { db } from '../../app';

export const createUserRecord = functions.auth
  .user()
  .onCreate(async (user): Promise<void> => {
    const { uid, email, metadata } = user;

    try {
      await db.collection('users').doc(uid).set({
        id: uid,
        email,
        createdAt: metadata.creationTime,
      });

      console.log({ id: uid, email, createdAt: metadata.creationTime });
      console.log('User record created successfully');
    } catch (error) {
      console.error('Error creating user record:', error);
    }
  });
