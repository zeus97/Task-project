import { LogSuccess, LogWarning } from "../Utils/logger";
import { getUserByID, saveTasks } from "../Domain/orm/User.orm";
import { IUserController } from "./Interfaces";
import { Task } from "../Domain/Interfaces/Task.interface";
import { AuthResponse, UserResponse } from "./Types";
import { User } from "../Domain/Interfaces/User.interface";
import { Route, Tags, Post, Get, Path, Body,Query} from 'tsoa';

@Route('/api/v1/me')
@Tags('UserController')
export class UserController implements IUserController{
    /**
     * Endpoint to get User data after log in
     * @param id ID of User by Query param /me?id=ID
     * @returns Returns Promise of User data
     */
    @Get('/')
    public async userData(@Query() id: string) {
     
        let response = undefined;
        let userFound: User | undefined = undefined;
             
        if(id){
            LogSuccess(`[/api/v1/me] Get User Data By ID: ${id} `);
            await getUserByID(id).then((user)=> {
                userFound = user;
                if(userFound != null){
                   response = {
                        status: 200,
                        user: userFound
                    }
    
                }
            }).catch((error)=>{
                console.log(error)
            });
        } else{
            LogWarning('[/api/v1/me?id=xxx] ID missing ')
           return response = {
                status:404,
                message: 'Please provide an ID'
            }
        }
            return response;
        
        };
    


    /**
     * Endpoint to save the user's tasks
     * @param id ID of User by Query param /me/tasks?id=ID
     * @param {Task[]} tasks User tasks 
     * @returns Promise of tasks saved
     */
    @Post('/tasks')
    public async saveTasks(@Query() id: string,@Body() tasks: Task[]) {

        let response= undefined;

        if(id && tasks){
            LogSuccess(`[/api/auth/me/tasks] Saving tasks `);
          response = await saveTasks(id,tasks);
          if(response != undefined){
              response = {
                status: 200,
                message: 'Tasks saved succefully',
                tasks: response
              }
          }

        }
        else{
            LogWarning('[/api/auth/me/tasks] Data missing')
            response = {
                status:404,
                message: 'Data missing'
            }
        }

        return response;
    };

}