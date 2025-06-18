"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Completed = void 0;
class Completed {
    constructor(taskName, taskPriority) {
        this.taskName = taskName;
        this.taskPriority = taskPriority;
        this.taskStatus = 'Completed';
        this.completedMsg = 'Congrats, You have finished it!';
    }
}
exports.Completed = Completed;
