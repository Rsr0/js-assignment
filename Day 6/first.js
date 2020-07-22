//Solution 1

// var i=0;
// var colors=['red','yellow','green','blue','aqua','brown','chocolate'];
// var bg=document.getElementById('bg');

// function changeColor(){
// bg.style.backgroundColor=colors[i];
// i++;
// if(i==colors.length)
// i=0;
// }

// setInterval(changeColor, 1000);

//-----------------------------------------------------------------------------------------------

//Solution 2

// let tb=document.querySelector(".table");
// var x=Number(prompt("Enter a number to print the table :","5"));

// let mul=(n)=>{
//     for(let i=1;i<11;i++){
        
//         tb.innerHTML+=`<h3>${n} x  ${i} = ${(n*i)}\n</h3>`;
//     }
// }
// mul(x);

//----------------------------------------------------------------------------------------------------



//Solution 3

const name=prompt("What's your name?","Anonymous");
const hy=document.querySelector('.greet');
hy.innerHTML+=`<h2><i> Hey ${name}, Have a Great experience!</i></h2>`;



const t = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    t.innerHTML = `<em>${time}</em>`;
}
setInterval(clock,1000);


const mode=document.querySelector('button');

mode.onclick=()=>{
    mode.classList.toggle('white');
    document.body.classList.toggle('black');
    if(mode.innerText=="Dark-Mode")
    mode.innerText="Light-Mode";
    else
    mode.innerText="Dark-Mode"
};
console.log(mode)