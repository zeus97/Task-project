import { Task } from "../../Domain/Interfaces/Task.interface"
import { User } from "../../Domain/Interfaces/User.interface"

/**
 * Basic JSON response for Controllers
 */
export type BasicResponse = {
    message: string
}

/**
 * Auth JSON response for Controllers
 */
 export type AuthResponse = {
    status: number,
    message: string,
    token?: string,
    user?:User,
    id?:string
}

/**
 * User JSON response for Controllers
 */
export type UserResponse ={
    status:number,
    message: string,
    tasks?:Task[]
}