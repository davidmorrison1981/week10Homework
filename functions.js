// function hello(){
//   console.log("Hello everyone");
// }

// hello();

// function add(number1, number2){

//   return number1 + number2;
// }

// console.log(add(5,7));

// function printName(name, age){
//   console.log(name +" is "+ age +" years old");
// }

// printName(30, "Craig");

// function add(number1, number2){

//   return number1 + number2;
// }

// console.log(add(5,7,5,6,2,6));

// function sum(){
//   var total = 0;
//   for (var i = 0; i< arguments.length; i++){
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(4,2,3,6,6,8,3));

// var hello = function(){
//   console.log("Hello!");
// }

// hello();

// var greater = function(a,b){
//   if (a<b) {
//     return a;
//   }
//   else {
//   return b;
//   }

// }

// // console.log("the return value is: " + greater(1,2))

// var functionCallingFunctions = function(functionToCall){
//   console.log(functionToCall(5,9))
// }

// functionCallingFunctions(greater);


function speakName( firstName, lastName){
  console.log("fit like " + firstName +" "+ lastName);
}

speakName("David", "Morrison");

function multiplier(num1, num2){
  console.log(num1*num2);
}
multiplier(2,4);

function arrayChat(){
 var myArray = [1,2,3,4]
  console.log(myArray.slice(0,1));
}
arrayChat();


var names = ["Peter", "Russ","David", "James"]
function namePrinter(){
  for (i=0; i<names.length; i++){
    console.log(names[i]);
  }
}
namePrinter(names);

var animals =["cow", "chicken", "turkey", "ostrich"];
var farm=[];
function farmAddAnimals(animals,farm){
  for (i=0; i<animals.length; i++){
    farm.push(animals[i])
    console.log(farm)
  };
}

farmAddAnimals(animals,farm);
