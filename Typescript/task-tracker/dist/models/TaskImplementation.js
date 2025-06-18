"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskImplementation = void 0;
class TaskImplementation {
    constructor(username) {
        this.listOfTasks = [];
        this.username = username;
    }
    addTask(task) {
        this.listOfTasks.push(task);
    }
    getAllTasks() {
        return this.listOfTasks;
    }
    editTask(tasktoedit, incomingtask) {
        for (let i = 0; i < this.listOfTasks.length; i++) {
            if (this.listOfTasks[i].taskName == tasktoedit) {
                this.listOfTasks[i] = incomingtask;
            }
        }
        return this.listOfTasks;
    }
    deleteTask(tasktoremove) {
        for (let i = 0; i < this.listOfTasks.length; i++) {
            if (this.listOfTasks[i].taskName == tasktoremove) {
                this.listOfTasks.splice(i, 2);
                console.log(`${tasktoremove} is deleted`);
                break;
            }
        }
    }
}
exports.TaskImplementation = TaskImplementation;
