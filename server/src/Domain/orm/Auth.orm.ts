import { LogError } from "../../Utils/logger";
import { userEntity } from "../Entities/User.entity";
import { User } from "../Interfaces/User.interface";
import { Auth } from "../Interfaces/Auth.interface";
import { AuthResponse} from "../../Controllers/Types/index";

// Environment variables
import dotenv from 'dotenv';

// BCRYPT for passwords
import bcrypt from 'bcrypt';

// JWT
import jwt from 'jsonwebtoken';

// Configuration of environment variables
dotenv.config();

// Obtain Secret key to generate JWT
const secret = process.env.SECRETKEY || 'MYSECRETKEY';

//Register User
export const registerUser = async (user: User): Promise<AuthResponse | undefined >=> {

    try{
        let userModel = userEntity();
        let userFound: User | null ;
        let response= undefined ;
        

       userFound = await userModel.findOne({email: user.email})

        if(userFound === null){

            await userModel.create(user);
            return  response = {
                status:200,
                message: `User registered successfully: ${user.email}`
             }
             

        } else{
            return response = {
                status:404,
                message: 'An user is already created with this email'
             }

           
        }

        

    } catch(error){
        LogError(`[ORM ERROR]: creating user: ${error}`);
    }

};

//Login User
export const loginUser = async (auth:Auth): Promise<AuthResponse | undefined> =>{
    try {
        let userModel = userEntity();

        let userFound: User |  null ;
        let token = undefined;
        let response = undefined;

        // Check if user exists by Unique Email
       userFound = await userModel.findOne({email: auth.email})

       if(userFound === null){
            console.error(`[ERROR Authentication in ORM]: Email not valid`);
           return response = {
                status: 404,
                message: 'Invalid email'
            };

       }
        
        // Check if Password is Valid (compare with bcrypt)
        let validPassword = bcrypt.compareSync(auth.password, userFound!.password);

        if(!validPassword){
            console.error(`[ERROR Authentication in ORM]: Password Not Valid`);
           return response= {
                status: 404,
                message: 'Invalid password'
            }

            
        }

        // Generate our JWT
        token = jwt.sign({email: userFound!.email}, secret, {
            expiresIn: "2h" 
        });

        if (userFound && token){
            
           return response= {
                status:200,
                message: `Welcome ${userFound.name}`,
                id:userFound.id,
                token: token
            }

        }

    } catch (error) {
        LogError(`[ORM ERROR]: Login User: ${error}`);
    }
};