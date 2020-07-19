let sales=prompt("Enter the sales");
let commission=1;

if(sales<5000)
{
    commission=sales*0.02;
}else if(sales<=10000)
{
    commission=sales*0.05;
}else if(sales<=20000)
{
    commission=sales*0.07;
}else if(sales>20000)
{
    commission=sales*0.10;
}
console.log(commission);