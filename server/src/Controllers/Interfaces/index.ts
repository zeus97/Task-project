import { User } from '../../Domain/Interfaces/User.interface'
import {Auth} from '../../Domain/Interfaces/Auth.interface'
import { AuthResponse, UserResponse } from '../Types'

export interface IAuthController {
    registerUser(user: User): Promise<AuthResponse | undefined>
    loginUser(auth: Auth): Promise<AuthResponse | undefined>
};

export interface IUserController {
    saveTasks(id:string,tasks:[]):Promise<UserResponse | undefined>
    userData(id:string): Promise<AuthResponse | undefined>
}