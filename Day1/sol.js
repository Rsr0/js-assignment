console.group("Console Object Methods"); //Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
console.time("time_taken");    //Starts a timer
console.log("Hello");       //Outputs a message to the console
console.table({ firstname : "Sahil", lastname : "Rana" });
console.warn("WARNING "); //Outputs a warning message to the console
console.error("!ERROR!");
console.info("Information");    //Outputs an informational message to the console
console.trace('Tracing');    //Outputs a stack trace to the console
console.count('First')
console.count('First') //Logs the number of times that this particular call to count() has been called
//console.clear() -  clears the console


console.groupCollapsed("collapsed group");
var x = 10;
// Here x is 10
{
  let x = 2;
  console.log('Inside the block x = '+x);
  // Here x is 2
}
// Here x is 10
console.log('outside the block x = '+x);

const PI = 3.141592653589793;
// This will give an error  PI = 3.14;      
console.log(PI);


console.timeEnd('time_taken');  //Stops a timer that was previously started by console.time()

console.groupEnd()	//Exits the current inline group in the console


