/// <reference path="./js/subjects/Teacher.ts" />
/// <reference path="./js/subjects/Subject.ts" />
/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/React.ts" />
/// <reference path="./js/subjects/Java.ts" />

const cppTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(cppTeacher);
console.log(cpp.getAvailableTeacher()); // Available Teacher: Guillaume

const reactTeacher: Subjects.Teacher = {
  firstName: "Ada",
  lastName: "Lovelace",
  experienceTeachingReact: 5
};

const react = new Subjects.React();
react.setTeacher(reactTeacher);
console.log(react.getAvailableTeacher()); // Available Teacher: Ada

const javaTeacher: Subjects.Teacher = {
  firstName: "James",
  lastName: "Gosling"
};

const java = new Subjects.Java();
java.setTeacher(javaTeacher);
console.log(java.getAvailableTeacher()); // No available teacher
