let marks=prompt("Enter your marks");
console.log('Using If-Else')
if(marks>75)
{
    console.log(`The marks are ${marks} and Grade=A`);
}else if(marks>60)
{
    console.log(`The marks are ${marks} and Grade=B`);

}else if(marks>40)
{
    console.log(`The marks are ${marks} and Grade=C`);
}else 
{
    console.log(`The marks are ${marks} and Grade=D`);
}
console.log('Using Switch');
marks=parseInt(marks)
//console.log(mark);
switch(true)
{
    case(marks>75):
        console.log(`The marks are ${marks} and Grade=A`);
        break;
    case(marks>60):
         console.log(`The marks are ${marks} and Grade=B`);
         break;
    case(marks>40):
         console.log(`The marks are ${marks} and Grade=C`);
         break;
    case(marks<40):
        console.log(`The marks are ${marks} and Grade=D`);
        break;
    default:
        console.log("Undefined")    
}

console.log('Using Ternary');
console.log(marks>75?`The marks are ${marks} and Grade=A`:`The marks are ${marks} and Grade=B`)