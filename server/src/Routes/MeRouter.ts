import express, { Request, Response} from 'express';

//Controllers
import { UserController } from '../Controllers/UserController';

//Middleware to verify JWT
import { verifyToken } from '../Middlewares/verifyToken.middleware';

// Middleware to acces body of request
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

let meRouter = express.Router();

meRouter.route('/')
.get(verifyToken, async (req:Request,res:Response)=>{

    let id = req?.query?.id as string;

        if(id){

            // Controller: Auth Controller
            const controller = new UserController();

            // Obtain response from Controller
            let response = await controller.userData(id);

            // If user is authorised:
            if(response != undefined && response.status === 200){
                return res.status(200).send(response);
            }
            else{
                return res.status(404).send({
                    message: 'An error ocurred'
                });
            }
            

        }else{

            // Missing ID
            return res.status(401).send({
                message: 'You are not authorised to perform this action'
            })
        }
})

meRouter.route('/tasks')
.post(verifyToken,jsonParser, async (req: Request,res:Response)=>{

    let tasks = req?.body.tasks;
    let id = req?.query?.id as string;

    if(id && tasks){

        // Controller: User Controller
        const controller = new UserController();
        
        let response = await controller.saveTasks(id,tasks);

        if(response === undefined){
            return res.status(404).send({
                message:'Error'
            })
        };

        if(response.status === 404){
            return  res.status(404).send(response);
        }

        // Success response
        return res.status(200).send(response);   

    }
    else {
        res.status(401).send({
            message:'You are not authorised to perform this action'
        })
    }

})

export default meRouter;