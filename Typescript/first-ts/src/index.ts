import { Personal } from "./model/Personal";
import { Professional } from "./model/Professional";
import { UserInfo } from "./model/UserInfo";

const user = new UserInfo('admin', 'admin@123', 'admin@example.com');
 
const p1 = new Personal(
 'Alice', 'Smith', '1234567890', 'New York',
 '2022-12-25', '2022-01-01', 'NYC', 'Friend', 'alice.jpg'
);
 
const p2 = new Professional(
 'Bob', 'Jones', '9876543210', 'Los Angeles',
 'bob@company.com', 'Manager', 'Tech Corp', 'bob-card.png'
);
 
user.addContact(p1);
user.addContact(p2);
 
console.log('All Contacts:', user.getAllContacts());