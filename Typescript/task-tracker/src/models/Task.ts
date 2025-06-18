import { Priority } from "./Priority";

export interface Task{
    taskName: string;
    taskPriority: Priority;
    taskStatus: 'Pending' | 'Completed';
}