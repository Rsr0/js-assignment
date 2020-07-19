//Solution 1

for(let i=1;i<=100;i++){
  if(i%3===0 && i%5===0)
    console.log(i+'fizzbuzz');
 else
  if(i%3===0)
    console.log(i+'fizz');
  if(i%5===0)
    console.log(i+'buzz');
}


//Solution 2
const student={
  name:"Helsinki",
  age:24,
  projects:{
    diceGame:"Two player dice game using Javascript"
  }
}

let {name,age,projects:{diceGame}}=student;
console.log(name,age,diceGame);


//Solution 3

let shoppingList=['Milk','Bread','Cheese'];
let shoppingBasket=[...shoppingList,'Onions','Lettuce'];
console.log(`shoppingList: ${shoppingList}`);
console.log(`shoppingBasket: ${shoppingBasket}`);



 //Solution 4

var a,b,ans=0;
a=Number(prompt("Enter first number:"));
b=Number(prompt("Enter second number:"));

let choice=Number(prompt("1.Addition  2.substraction  3.Multiplication \n4.Division  5.Square root  6.Percentage \nEnter the choice :"));
switch(choice){
  case 1:ans=a+b; break;
  case 2:ans=a-b; break;
  case 3:ans=a*b; break;
  case 4:ans=a/b; break;
  case 5:ans=[Math.sqrt(a),Math.sqrt(b)];break;
  case 6:ans=[(a/(a+b))*100,(b/(a+b))*100];break;
  default: alert("...Bye...\nWrong choice!!!")
}
console.log(ans);


//Solution 5

var sale=Number(prompt("Enter the sales(>0):"));
var total=0;
if(sale<=5000)
  total=sale*0.02;
else if(sale<=10000)
    total=(5000*0.02)+((sale-5000)*0.05);
else if(sale<=20000)
     total=(5000*0.02)+(5000*0.05)+((sale-10000)*0.07);
else
    total=(5000*0.02)+(5000*0.05)+(10000*0.07)+((sale-20000)*0.1);
console.log("Total Commission = "+total);



//Solution 6

var n;
do{
  n=Number(prompt("Enter the number (>100):"));
}
while(n>100 ? false : n==''? false : true);



//Solution 7

var n=Number(prompt("Enter a number:"));

for(var j=2;j<=n;j++){
  for(var i=2;i<=Math.floor(j/2);i++)
  {
    if(j%i==0)
      break;
  } 
  if(i>j/2)
  console.log(j);
}


//Solution 8

let ask=(question,yes,no)=>{
  if(confirm(question)) yes()
  else no();
}

ask("Do you agree?",
   ()=>{alert("You agreed.");},
   ()=>{alert("You canceled the execution.");}
   );


