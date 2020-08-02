//console.log("hey")

const button=document.querySelector('#btn');
const list=document.querySelector('#list');

button.onclick=function(){
    let item=document.querySelector("#todo").value;
    //cause it returns nodevalue
    let text=document.createTextNode(item);
    let listitem=document.createElement('li');
    listitem.appendChild(text);
    list.appendChild(listitem);
    document.forms.myForm.reset();
}