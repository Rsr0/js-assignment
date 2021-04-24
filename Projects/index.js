const list = document.getElementById('list');
// const list  = document.querySelector('#list');

function createElement(el){
    return document.createElement(el);
}

let li = createElement('li');
let a  = createElement('a');

list.appendChild(li);
li.appendChild(a);
a.innerText="Youtube";
a.setAttribute('href',"https://youtube.com");

//To change position of new element
// list.insertBefore(li,document.getElementsByTagName('li')[1]);

// list.removeChild(document.getElementsByTagName('li')[0]);


// Regex intro
// const str = "prasadgmail.com";
// const pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

// console.log(pattern.test(str));