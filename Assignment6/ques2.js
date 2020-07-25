const num=prompt("Enter the number");
console.log(num)
//const name=document.querySelector('#one');
//console.log(name)
const list=document.querySelector('#list')
 //console.log(list)
 for(i=1;i<=10;i++){
     let no=num*i
 list.innerHTML+=`<li> ${num} * ${i} = ${no}</li>`;
 }
 console.log("--------------------------")
 //make the list bulleted.
// fruits.forEach(fru =>{
//     //list.innerText+=`<li> ${fru}</li>`;
//     list.innerHTML+=`<li> ${fru}</li>`;
// }) 
