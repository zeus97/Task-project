import axios from 'axios';
import { Register, Auth, ITask } from '../interfaces';

const baseURL = 'https://task-app-v1.onrender.com//api/v1';


export const RegisterUser = async (user: Register)=>{
   return axios.post(baseURL + '/auth/register',user)

};

export const LoginUser = async (auth:Auth)=>{
   return axios.post(baseURL + '/auth/login',auth)
};

export const userInfo = async (token: string, id: string)=>{
   return axios.get(baseURL + `/me?id=${id}`,{
      headers:{'x-access-token': token}
   })
};

export const saveTasks = async (tasks: ITask[], token: string, id: string)=>{
   return axios.post(baseURL + `/me/tasks?id=${id}`,{tasks: tasks},{
      headers:{'x-access-token': token}
   })
};