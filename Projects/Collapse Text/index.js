const text=document.getElementById('text');
const button=document.getElementById('btn');

button.onclick=()=>{
  
    if(text.classList.toggle('show'))
    button.innerText="Read Less";
   else
    button.innerText="Read More";
    // if(text.className == 'show'){
    //     text.className = '';
    //     button.innerText = "Read Less";
    // }
    // else{
    //     text.className = 'show';
    //     button.innerText = "Read More";
    // }
}