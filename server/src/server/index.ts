import express, { Express, Request, Response } from "express";

// Security
import cors from 'cors';
import helmet from 'helmet';

// Root Router
import rootRouter from '../Routes';

//Mongo DB
import mongoose from "mongoose";
import dotenv from 'dotenv';


//Swagger
import swaggerUI from 'swagger-ui-express';
import * as swaggerJSDoc from '../../public/swagger.json';

// * Create Express APP
const server: Express = express();



// * Define SERVER to use "/api/v1" and use rootRouter from 'index.ts' in routes
// From this point onover: http://localhost:8000/api/v1...
server.use(
    '/api/v1',
    rootRouter
    );


// Static server
server.use(express.static('public'));

// * Swagger config
server.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerJSDoc))

// Mongoose Connection
dotenv.config();
mongoose.set('strictQuery',true);
const url = process.env.MONGODB_URL;
if(url){
    mongoose.connect(url)
    .then(()=> console.log('MongoDB connected'))
    .catch((err)=>{console.log(err)})
}






// * Content Type Config
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({limit: '50mb'}));

// * Redirection Config
// http://localhost:8000/ --> http://localhost:8000/api/v1
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api/v1');
});

// * Redirection Config
// http://localhost:8000/api --> http://localhost:8000/api/v1
server.get('/api', (req: Request, res: Response) => {
    res.redirect('/api/v1');
});


// * Security Config
server.use(helmet());
server.use(cors());

export default server;
