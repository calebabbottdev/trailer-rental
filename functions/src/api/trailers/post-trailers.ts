import { Request, Response } from 'express';
import { db } from '../../app';

export const postTrailers = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { title } = request.body;

  try {
    const newTrailer = await db
      .collection('trailers')
      .add({ ownerId: id, title });

    response.status(201).json({ id: newTrailer.id });
  } catch (error) {
    response.status(500).json({ error: 'Unable to create trailer' });
  }
};
