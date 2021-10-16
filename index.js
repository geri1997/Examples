//Remove comments to test out the code.


/*
//This returns an object with properties a and b. Same as writing: var numberF = {a:2,b:4}
//To access the values in the properties, use same syntax as any other object.
numberF = ()=>{
    var a = 2;
    var b = 4;
        return {b,a};
}

//logging numberF without parenthesis, logs the function.
console.log(numberF);//logs the function
//logging numberF with parenthesis, logs the object.
console.log(numberF());//object
//logging numberF with parenthesis and a property, logs the property.
console.log(numberF().a);//2
console.log(numberF().b);//4
//logging numberF without parenthesis and a property, logs undefined.
console.log(numberF.a);//undefined
console.log(numberF.b);//undefined
//Assigning the object returned by the function to a variable.
var returnedObject = numberF();
console.log(returnedObject);//object
console.log(returnedObject.a);//2
*/


/*
//Ways to create functions
*/
/////////////////////////////////////////////////////
/*
//User input button
// If script tag loads before the dom elements that are used in this code,
//  you get an error. Script tag must load after the page 
//  or after the elements mentioned in it in order to execute correctly.
//   Had to move script tag from the head to the bottom of the body tag.
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    if(myName.length === 0){
        console.log('Field is Empty');
    }else
    console.log("Hello",myName);
}
*/
/////////////////////////////////////////////////////////
/*Working with time
The global setTimeout() method sets a timer which executes 
a function or specified piece of code once the timer expires.
var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = setTimeout(function[, delay]);
var timeoutID = setTimeout(code[, delay]);
*/
/*
setTimeout(function(){ alert("Test"); }, 3000);
var specTime = 10000;
setTimeout(function(){ alert("Hello"); }, specTime);
setTimeout(function(){ alert("Geri"); }, specTime +3000);
var c= setTimeout(function(){ alert("Geri"); }, specTime +3000);
c=Number(c);
*/

////////////////////////////////////////////////////////////
/*type conversion

//converts from string to number
var age = window.prompt("Your name is:");
age = Number(age);
//Converts 3.14 to string.
var myVar;
myVar = String(3.14);
//Convert int or string to boolean
var conv;
conv = Boolean(string or num);//every num and string converts to true except:0,"",NaN,null,undefined.

*/
/////////////////////
/*

var alphabet = 'sgjfjndg';
console.log(alphabet[2]);
console.log(alphabet.charAt(2));
//both log the same letter "j".

*/

///////////////
//reference vs value example
/*
let newArray = [];
let arr1 = [];
for (let i = 0; i < 2; i++) {

  for (let j = 0; j < 2; j++) {

    arr1.push(0);
    //console.log('Arr1:',arr1); 
  }

  newArray.push(arr1);
  //console.log('New Array:', newArray)
  
}
console.log(newArray);
*/