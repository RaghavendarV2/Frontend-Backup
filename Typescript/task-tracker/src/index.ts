import { Completed } from "./models/Completed";
import { Pending } from "./models/Pending";
import { Priority } from "./models/Priority";
import { TaskImplementation } from "./models/TaskImplementation";

const user1 = new TaskImplementation("Raghav");

const task1 = new Pending("Complete the juice", Priority.priorityHigh);

const task2 = new Completed("Jump exercise", Priority.priorityMedium)

user1.addTask(task1);
user1.addTask(task2);

console.log(user1.getAllTasks());

console.log(user1.editTask('Jump exercise', new Pending("Jump exercise", Priority.priorityHigh)));

user1.deleteTask('Jump exercise');
console.log(user1.getAllTasks());
