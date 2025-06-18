import { Contact } from "./Contact";


export class Professional implements Contact {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    contactType: 'professional';
    
    email: string;
    designation: string;
    organizationName: string;
    businessCard: string;

    
    
    constructor(
      firstName: string,
      lastName: string,
      phone: string,
      address: string,
      email: string,
      designation: string,
      organizationName: string,
      businessCard: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.address = address;
      this.contactType = 'professional';
      this.email = email;
      this.designation = designation;
      this.organizationName = organizationName;
      this.businessCard = businessCard;
    }
   }