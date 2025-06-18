import { Contact } from "./Contact";


export class Personal implements Contact {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    contactType: 'personal';
    
    dateOfAnniversary: string;
    specialDate: string;
    location: string;
    relation: string;
    profilePic: string;
    
    constructor(
      firstName: string,
      lastName: string,
      phone: string,
      address: string,
      dateOfAnniversary: string,
      specialDate: string,
      location: string,
      relation: string,
      profilePic: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.address = address;
      this.contactType = 'personal';
      this.dateOfAnniversary = dateOfAnniversary;
      this.specialDate = specialDate;
      this.location = location;
      this.relation = relation;
      this.profilePic = profilePic;
    }
   }