export interface ITask{
    description: string,
    completed: boolean
}

export interface Register {
    name: string,
    email:string,
    password:string
}

export interface Auth {
    email:string,
    password:string
}