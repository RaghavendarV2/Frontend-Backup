import { Pending } from "./Pending";
import { Task } from "./Task";

export class TaskImplementation{
    username: string;
    listOfTasks: Task[] = [];

    constructor(username:string){
        this.username = username;
    }

    addTask(task:Task) : void{
        this.listOfTasks.push(task);
    }

    getAllTasks() : Task[]{
        return this.listOfTasks;
    }

    editTask(tasktoedit:string, incomingtask:Task) : Task[]{
        for(let i:number = 0;i<this.listOfTasks.length;i++){
            if(this.listOfTasks[i].taskName == tasktoedit){
                this.listOfTasks[i] = incomingtask;
            }
        }
        return this.listOfTasks;
    }

    deleteTask(tasktoremove:string) : void{
        for(let i:number = 0;i<this.listOfTasks.length;i++){

            if(this.listOfTasks[i].taskName == tasktoremove){
                this.listOfTasks.splice(i, 2); 
                console.log(`${tasktoremove} is deleted`);
                break;
            }
        }
    }
}