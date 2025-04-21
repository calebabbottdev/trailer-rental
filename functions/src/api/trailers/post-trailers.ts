import { Request, Response } from 'express';
import { db } from '../../app';

interface AuthenticatedRequest extends Request {
  user?: {
    uid: string;
    [key: string]: any;
  };
}

export const postTrailers = async (
  request: AuthenticatedRequest,
  response: Response,
): Promise<void> => {
  const { title } = request.body;
  const userId = request.user?.uid;

  if (!userId) {
    response.status(401).json({ error: 'Unauthorized: No user ID found' });
  }

  try {
    const newTrailer = await db
      .collection('trailers')
      .add({ ownerId: userId, title });

    response.status(201).json({ id: newTrailer.id });
  } catch (error) {
    console.error('Error creating trailer:', error);
    response.status(500).json({ error: 'Unable to create trailer' });
  }
};
