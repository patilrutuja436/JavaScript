//1.log() function
console.log(document);
//2.assert() function
var a=5;
console.assert(a==5,"False")
//3.time():Start a timer
console.time("Time taken:")
//4.count() function:counts number of times the perticular count() function has called
console.count()
//5.error():outputs an error message to the console
console.error("an error is occured")
//6.warn(): outputs an warning to the console
console.warn("Warning!!!");
//7.table():Displays tablar data as table
var a={name:"Ram",age:55};
var b={name:"Sham",age:5};
var c={name:"Neha",age:10};
var d={name:"Rutuja",age:20};
var e={name:"Siddhi",age:27};
var f={name:"Aishwarya",age:45};
console.table({a,b,c,d,e,f})
//8.log(): for custumized message
console.log("%c Custom Message!!!",'color:red;')
//9.timeEnd: to end the timer
console.timeEnd("Time taken:")
//10.clear() :Clears the console
//console.clear();
