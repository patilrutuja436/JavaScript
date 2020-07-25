let name=prompt("Enter your name:","Annonymous");
const name1=document.getElementById('name')
name1.innerText=`Welcome ${name} !!!`
//clock
const ctime=document.getElementById('time');
function clock(){
    let date=new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText=time;
}
//clock();
//But for above to work properly we have to refresh the page every second
//so better to use settimeinterval

setInterval(clock,1000);

//Dark Mode
const data=document.getElementById('imp')
console.log(data)
const button=document.getElementById('btn');
button.onclick=()=>{
    data.classList.toggle('highlight')
}
