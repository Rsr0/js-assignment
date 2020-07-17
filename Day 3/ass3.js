//Solution 1
let x=Number(prompt("Enter a number:"));
let result=(x%2)?'odd':'even';
console.log(`The number entered is ${x} and Number is ${result}`);

//Solution 2
let OS=prompt("Enter the OS (separete version with a space):");
let arr=OS.split(' ');
console.log(`The OS name is ${arr[0]} and version is ${arr[1]}`);


//Solution 3
let marks=Number(prompt("Enter  the Marks (out of 100):"));
var grade;
//Using if-elseif-else
if(marks<61 && marks>50){
  grade='A';
}
else if(marks<=50 && marks>40){
  grade='B';
}
else if(marks<=40 && marks>30){
  grade='C';
}
else{
  grade='D';
}

//Using Ternary operator
grade=(marks<61 && marks>50)?'A':(c)?'B':(marks<=40 && marks>30)?'C':'D';


//Using Switch
switch(1){
    case(marks<61 && marks>50):grade='A';
              break;
    case(marks<61 && marks>50):grade='B';
              break;
    case(marks<=40 && marks>30):grade='C';
              break;
  default: grade='D';
}

console.log(`Marks are ${marks} & grade is ${grade}`);

