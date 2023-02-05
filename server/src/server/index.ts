import express, { Request, Response } from "express";

//Root Router
import rootRouter from '../Routes/index';


//Mongo DB
import mongoose from "mongoose";
import dotenv from 'dotenv';


//Swagger
import swaggerUI from 'swagger-ui-express';
import * as swaggerJSDoc from '../../swagger.json';

// * Create Express APP
const server = express();

//CORS Enabled
server.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept, Authorization,x-access-token");
    next();
})

// * Define SERVER to use "/api/v1" and use rootRouter from 'index.ts' in routes
// From this point onover: http://localhost:8000/api/v1...
server.use('/api/v1',rootRouter);


// Static server
server.use(express.static('dist'));

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


export default server;
