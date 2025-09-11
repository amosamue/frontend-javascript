// Task 1: Let's build a Teacher interface and functions

// 1) Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional property
  location: string;
  [key: string]: any; // index signature (allows extra dynamic properties)
}

// 2) Create a teacher object using the interface
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "London",
  contract: false, // extra dynamic attribute
};

console.log(teacher1);

// 3) Define a function type for printing a teacher’s name
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4) Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// 5) Create a StudentClass with interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Jane", "Smith");
console.log(student.displayName());  // Output: Jane
console.log(student.workOnHomework());  // Output: Currently working
