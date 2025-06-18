import { Priority } from "./Priority";
import { Task } from "./Task";

export class Pending implements Task {
    taskName: string;
    taskPriority: Priority;
    taskStatus: 'Pending';

    completedMsg: string;

    constructor(taskName: string, taskPriority: Priority) {
        this.taskName = taskName;
        this.taskPriority = taskPriority;
        this.taskStatus = 'Pending';
        this.completedMsg = 'Cmon, Just Do it!';
    }
}