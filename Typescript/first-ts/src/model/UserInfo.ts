import { Contact } from "./Contact";


export class UserInfo {
    username: string;
    password: string;
    emailId: string;
    contactIds: Contact[] = [];
    
    constructor(username: string, password: string, emailId: string) {
      this.username = username;
      this.password = password;
      this.emailId = emailId;
    }
    
    addContact(contact: Contact): void {
      this.contactIds.push(contact);
    }
    
    getAllContacts(): Contact[] {
      return this.contactIds;
    }
   }