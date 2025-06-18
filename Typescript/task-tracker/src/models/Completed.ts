import { Priority } from "./Priority";
import { Task } from "./Task";


export class Completed implements Task{
    taskName: string;
    taskPriority: Priority;
    taskStatus: 'Completed';

    completedMsg : string;

    constructor(taskName: string, taskPriority: Priority){
        this.taskName = taskName;
        this.taskPriority = taskPriority;
        this.taskStatus = 'Completed';
        this.completedMsg = 'Congrats, You have finished it!';
    }
}