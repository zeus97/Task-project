import { User } from '../../Domain/Interfaces/User.interface'
import {Auth} from '../../Domain/Interfaces/Auth.interface'

export interface IAuthController {
    registerUser(user: User): Promise<any>
    loginUser(auth: Auth): Promise<any>
};

export interface IUserController {
    saveTasks(id:string,tasks:[]):Promise<any>
    userData(id:string): Promise<any>
}