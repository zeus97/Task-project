import { User } from "../Interfaces/User.interface";

export interface loginResponse {
    user: User,
    token: string
}