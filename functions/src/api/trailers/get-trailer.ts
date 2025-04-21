import { Request, Response } from 'express';
import { db } from '../../app';

export const getTrailer = async (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const trailerDoc = await db.collection('trailers').doc(id).get();

    if (trailerDoc.exists) {
      response.status(200).json({ id: trailerDoc.id, ...trailerDoc.data() });
    } else {
      response.status(404).json({ error: 'Trailer not found' });
    }
  } catch (error) {
    response.status(500).json({ error: 'Error fetching trailer' });
  }
};
