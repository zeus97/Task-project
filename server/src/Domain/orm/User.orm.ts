import { LogError } from "../../Utils/logger";
import { userEntity } from "../Entities/User.entity";
import { Task } from "../Interfaces/Task.interface";
import { User } from "../Interfaces/User.interface";


export const getUserByID = async (id:string):Promise<User | undefined>=>{

    try{
        let userModel = userEntity();
        return await userModel.findById(id).select('name email tasks');

    }catch(error){
        LogError(`[ORM ERROR]: Getting User By ID: ${error}`);
    }
};

export const saveTasks = async (id:string, tasks:Task[]):Promise<Task[] | undefined>=>{


    try{
        let userModel = userEntity();
        let response = undefined;
        await userModel.updateOne({_id:id},{tasks:tasks})
        .then((r)=>{
          response = userModel.findById(id).select('tasks -_id');   
        }).catch((err)=>{
            throw new Error('Something went wrong')
        })

        return response;

    }catch(error){
        LogError(`[ORM ERROR]: Saving tasks: ${error}`)
    
    }
};