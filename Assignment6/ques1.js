const arr=['black','grey','yellow','pink','red','orange'];
let i=0;
function changebgcolor(){
    if(arr.length==i)
    {
        i=0;
    }
         
        document.body.style.backgroundColor=arr[i];
        i=i+1;
        //setInterval(changebgcolor,1000);
    
}

setInterval(changebgcolor,4000)