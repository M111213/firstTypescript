/*function statusCode( code: string | number){
    console.log("My status code is ${code}.")
}
statusCode(404);
statusCode("404");*/

function getTime(): number{
    return new Date().getTime();
}
console.log(getTime());

function multiply(x: number, y: number){
    return x * y;
}
console.log(multiply(5,6));

let x: unknown = "Hello!";
console.log((x as string).length);

//class
/*class Person{
    private readonly name : string;
    public constructor(name: string){
        this.name = name;
    }
    public getName(): string{
        return this.name;
    }
}
const person = new Person("masudi hamidu");
console.log(person.getName());*/

class Student{
    regNumber : string;
    firstName : string;
    course: string;
    age : number;

    public constructor(regNumber : string, firstName : string, course: string, age : number){
        this.regNumber = regNumber,
        this.firstName = firstName,
        this.course = course,
        this.age = age

    }

}
const student = new Student("IMC/BCS/2125737","Masudi"," Computer Science", 23);
console.log(student);

let sFirstName: string = student.firstName;
let secondName: string = "masudi";

if(sFirstName == secondName){
    console.log("Names are not equal");
}
else{
    console.log("Names are match");
}


//array for student record
type stdrec = {
    regNumber: string;
    firstName: string;
    course: string;
    age: number;
}

let studentRecord: stdrec[][] = [
    [{ regNumber: "IMC/BCS/2125737", firstName: "Masudi", course: "Computer Science", age: 23}],
    [{ regNumber:"IMC/BCS/40323",firstName: "Dylan",  course: "Information Technology", age: 26 }]
];
for(let i = 0; i < 2; i++){
    console.log(studentRecord, i+ 1);
}



