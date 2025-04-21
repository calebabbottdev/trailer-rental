import * as functions from 'firebase-functions';
import { app } from './app';

// Auth
import { authenticate } from './middleware/authentication';

// Users
import { createUserRecord } from './api/users/create-user';
import { getUsers } from './api/users/get-users';
import { getUser } from './api/users/get-user';
import { putUser } from './api/users/put-user';

// Trailers
import { postTrailers } from './api/trailers/post-trailers';
import { getTrailers } from './api/trailers/get-trailers';
import { getTrailer } from './api/trailers/get-trailer';

// Express API routes
app.get('/users', authenticate, getUsers);
app.get('/users/:id', authenticate, getUser);
app.put('/users/:id', authenticate, putUser);

app.post('/trailers', authenticate, postTrailers);
app.get('/trailers', getTrailers);
app.get('/trailers/:id', getTrailer);

// Export Firebase Functions for the API routes
exports.api = functions.https.onRequest(app);

// Export Firebase Auth Trigger
exports.createUserRecord = createUserRecord;
