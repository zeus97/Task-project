import mongoose from 'mongoose'
import { User } from '../Interfaces/User.interface'


export const userEntity = () =>{
    let userSchema = new mongoose.Schema<User>(
        {
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            tasks: { type: [], required: true} 
        }
    )

    return mongoose.models.Users || mongoose.model<User>('Users', userSchema);
}