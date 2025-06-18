"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pending = void 0;
class Pending {
    constructor(taskName, taskPriority) {
        this.taskName = taskName;
        this.taskPriority = taskPriority;
        this.taskStatus = 'Pending';
        this.completedMsg = 'Cmon, Just Do it!';
    }
}
exports.Pending = Pending;
