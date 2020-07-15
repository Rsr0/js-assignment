//Solution 1
name=prompt("What's your name?")
console.log(name)

//Solution 2
age=confirm("Are you 21+?")
age ? console.log("Can Drink!") : console.log("Can't Drink!")

//Solution 3

// to extracts a part of a string 
//slice(start, end)
var str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13));
console.log(str.slice(7));
console.log(str.slice(-12, -6));

//substring(start, end)
console.log(str.substring(7, 13));

//substr(start, length)
console.log(str.substr(7, 6));
console.log(str.substr(-4));


//to search a value 
console.log(str.search(','));

//to replace the value
console.log(str.replace("Banana", "Orange"));
console.log(str)
// It returns a new string.

//to removes whitespace from both sides of a string
var str2 = "       Hello World!        ";
console.log(str2.trim());

//to return the unicode of the character
console.log(str.charCodeAt(0));

//convert string to array
var txt = "a,b,c,d,e";   
console.log(txt.split(","));



//to add or remove elementsin array
  
//splice(index for add, elements to remove,new elements)
var fruits = ["Banana", "Orange", "Apple", "Mango"];

//fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

fruits.splice(0, 1); // Removes the first element of fruits
console.log(fruits);

//to convert an array to string
console.log(fruits.toString()); //comma separated vaues.
console.log(fruits.join(" * ")); //separator can be used.




