import { Request, Response } from 'express';
import { db } from '../../app';

export const getUser = async (
  request: Request,
  response: Response,
): Promise<void> => {
  const { id } = request.params;

  try {
    const userDoc = await db.collection('users').doc(id).get();

    if (userDoc.exists) {
      response.status(200).json({ id: userDoc.id, ...userDoc.data() });
    } else {
      response.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    response.status(500).json({ error: 'Error fetching user' });
  }
};
