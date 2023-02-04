import express, { Request, Response } from "express";
import { AuthController } from "../Controllers/AuthController";
import { Auth } from "../Domain/Interfaces/Auth.interface";
import { User } from "../Domain/Interfaces/User.interface";



// to encrypt password
import bcrypt from 'bcrypt';

// Acces to body of the request
import bodyParser from "body-parser";

// Middleware to read JSON in Body
let jsonParser = bodyParser.json();

let authRouter = express.Router();

authRouter.route('/register')
.post(jsonParser, async (req: Request,res: Response)=>{
    let { name, email, password } = req?.body;
    let hashedPassword = '';
    if( name && password && email){
        
        hashedPassword = bcrypt.hashSync(password, 8);

        let newUser: User = {
            name : name,
            email: email,
            password: hashedPassword,
            tasks: []
        }

        // Controller Instance to excute method
        const controller: AuthController = new AuthController();

        // Obtaining Response from orm
        const response = await controller.registerUser(newUser);

        // Bad response
        if (response === undefined){
            return res.status(400).send({
                message: 'An error ocurred'
            })
        }
        // Success response
        if(response.status === 200){
            return res.status(200).send(response);
        }
        // Error response
         return res.status(200).send(response);
        
        

    }else {
        // Error response
        return res.status(400).send({
            message: '[ERROR User Data missing]: No user can be registered'
        });
    }
})

authRouter.route('/login')
.post(jsonParser, async(req:Request, res:Response)=>{

    let { email, password } = req?.body;

        if( email && password){

            // Controller Instance to excute method
            const controller: AuthController = new AuthController();

            let auth: Auth = {
                email: email,
                password: password
            }

            // Obtain Response
            let response = await controller.loginUser(auth);

            if (response === undefined){
                return res.status(400).send({
                    message: 'Something went wrong'
                })
            };

             // Send to the client the response which includes the JWT to authorize requests
            if (response.status === 200){
              return res.status(200).send(response);
            } 
            //if email or password is invalid
                return res.status(200).send(response);
            


        }else {
            // Data missing response
            return res.status(400).send({
                message: '[ERROR User Data missing]: No user can be registered'
            });
        }
})




export default authRouter