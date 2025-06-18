"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
class UserInfo {
    constructor(username, password, emailId) {
        this.contactIds = [];
        this.username = username;
        this.password = password;
        this.emailId = emailId;
    }
    addContact(contact) {
        this.contactIds.push(contact);
    }
    getAllContacts() {
        return this.contactIds;
    }
}
exports.UserInfo = UserInfo;
