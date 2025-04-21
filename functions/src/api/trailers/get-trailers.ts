import { Request, Response } from 'express';
import { db } from '../../app';

export const getTrailers = async (
  _request: Request,
  response: Response,
): Promise<void> => {
  try {
    const trailerDocsSnapshot = await db.collection('trailers').get();

    const users = trailerDocsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ error: 'Error fetching trailers' });
  }
};
