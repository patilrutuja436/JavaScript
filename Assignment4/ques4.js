
let comm=prompt("Enter Operation: e.g add 3 5");
comm=comm.split(" ");
console.log(comm);
let num1=Number(comm[1]);
let num2=Number(comm[2]);
switch(true)
{
    case comm[0]=="add":
        console.log(num1+num2);
        break;
    case comm[0]=="sub":
        console.log(num1-num2);
        break;
    case comm[0]=="mul":
        console.log(num1*num2);
        break;
    case comm[0]=="div":
        console.log(num1/num2);
        break;
    case comm[0]=="squareroot":
        let num=Math.sqrt(num1)
        console.log(num);
        break;
    case comm[0]=="percentage":
        console.log(num1+num2);
        break;
    default:
        console.log("Incorrect choice:");

}