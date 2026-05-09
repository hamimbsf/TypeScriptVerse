class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(hours: number) {
    console.log(`${this.name} sleep for ${hours} hours`);
  }
}

class Student extends Parent {}

const studentOne = new Student("Hamim", 21, "Chuadanga");

studentOne.getSleep(7);

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  getSleep(hours: number) {
    console.log(`${this.name} sleep for ${hours} hours`);
  }

  takeClass(hours: number) {
    console.log(`${this.name} take class for ${hours} hours`);
  }
}

const teacherOne = new Teacher("Jhankar Mahbub", 41, "USA", "CSE");

teacherOne.takeClass(2);
