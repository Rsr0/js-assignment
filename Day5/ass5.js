
// Solution 1
let n=Number(prompt("Enter a +ve no. -"));
let arr=[];
if(n>=0){
for(let i=0;i<n;i++)
  arr.push(i);
let odd_cubes=arr.filter(e=>e%2==1).map(e=>e**3);
console.log(odd_cubes); 
}
else
  console.log("It's not a positive No.")



//Solution 2

class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
addCoins(){
	this.luCoins++;
	console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
}
removeCoins(){
	this.luCoins--;
	console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
}

}

class Admin extends Moderator{
 addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   deleteCourse(user,course){
   var index=user.courses.indexOf(course);
   user.courses.splice(index,1);
   console.log(user);
   }
}





//Solution 3

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>{
  for(let i=0;i<data.length;i++)
    if(data[i].completed)
    console.log(data[i])
      })
