console.log("Hello world!")

// const rgb = [25, 20, 10];
// const [a,b,c] = rgb;
// console.log(`first ${a} second ${b} third ${c}`)

// const person = {name:"raghav", age:20};
// const{name, age} = person;
// console.log(`name is ${name} age is ${age}`);

// const person1 = {name:"raghav", age:21};
// const person2 = {name:"babu", age:22};
// const person3 = {name:"rakesh", age:21};
// const person4 = {name:"gowtham", age:22};

// const persarr = [person1, person2, person3, person4];
// const[male1, male2] = persarr;
// console.log(`1st guy name ${male1.name} 1st guy age ${male1.age} \n 2nd guy name ${male2.name} 2nd guy age ${male2.age}`)


const person = { name: "Raghav", age: 21, city: "Chennai" }

person.name="iray" //this is doubtful, ask
// Creating a new object with updated city property
const updatedPerson = { ...person, city: "Bangalore" }

console.log(person)
console.log(updatedPerson)



const userDetails = { name: "Babu", age: 22 };
const contactInfo = { phone: "9876543210", email: "babu@example.com" };

const userProfile = { ...userDetails, ...contactInfo };

console.log(userProfile);



console.log("Hello from TypeScript")
let age = 21;  // Explicitly defining type
console.log(age + 1);