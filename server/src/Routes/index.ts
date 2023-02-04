/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, Response } from 'express';
import { LogInfo } from '../Utils/logger';
import authRouter from './AuthRouter';
import meRouter from './MeRouter';

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();


// Activate for requests to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/v1')
    // Send Hello World
    res.send('Welcome to my API Restful: ');
});


// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8000/api/v1
server.use('/auth', authRouter); // http://localhost:8000/api/v1/auth
server.use('/me', meRouter); // http://localhost:8000/api/v1/me

export default server;