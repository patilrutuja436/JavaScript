const student={
    name:"Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using Javascript"
    }
}
const{name}=student;
console.log(name);
const{age}=student;
console.log(age);
const{projects:{diceGame}}=student;
console.log(diceGame);
