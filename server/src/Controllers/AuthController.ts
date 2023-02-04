import { Auth } from '../Domain/Interfaces/Auth.interface';
import { User } from '../Domain/Interfaces/User.interface';
import { loginUser, registerUser } from '../Domain/orm/Auth.orm';
import { LogSuccess, LogWarning } from '../Utils/logger';
import {IAuthController} from '../Controllers/Interfaces/index'
import { AuthResponse } from './Types';
import { Route, Post, Tags, Body, Response, SuccessResponse} from 'tsoa'


@Route('/api/v1/auth')
@Tags('AuthController')
export class AuthController implements IAuthController{
    /**
     * Endpoint to Register new user
     * @param {User} user Data of user 
     * 
     */

    @SuccessResponse('200','User registered succeful')
    @Response('404','The email is already in use')
    @Post('/register')
    public async registerUser(@Body() user: User): Promise<AuthResponse | undefined> {
        
        let response;
        
        if(user){
            LogSuccess(`[/api/v1/auth/register] Register New User: ${user.email} `);
            response = await registerUser(user)
        } else {
            LogWarning('[/api/auth/register] Register needs User Entity')
            
            response = { 
                status: 404,
                message:'User not Registered: Please, provide a User Entity to create one'
            }
        }

        return response;
        
    };

    /**
     * Endpoint to log in user
     * @param {Auth} auth User credentials
     * @returns {AuthResponse} Promise of AuthResponse with a JWT
     */
    @Post('/login')
    public async loginUser( @Body() auth: Auth): Promise<AuthResponse | undefined> {
        let response;
        
        if(auth){
            LogSuccess(`[/api/auth/login] Login User: ${auth.email} `);
            response = await loginUser(auth);
            
             
    }else {
        LogWarning('[/api/auth/login] Login needs Auth Entity (email && password')
        response = {
            status: 404,
            message: '[AUTH ERROR]: Email & Password are needed',
        }
    }
    
    return response;
    
};


}


