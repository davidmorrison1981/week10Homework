//episode1
var name = 'Keith'; //global-ish variable

var printName = function() {
    console.log('My name is ' + name ); //prints My name is Keith to terminal when run
}

printName(); // executes function



//episode2
score = 5; //global-ish variable

var result = function() {
    var score = 3; // local variable with higher priority to global variable
    return score; // returns value of 3 from function
}

console.log(result()); // prints value of 3 to terminal



//episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits']; // global-ish array

var listAnimals = function() {
    myAnimals = ['Ducks', 'Dogs', 'Lions']; // local array values superceed global
    for(var i=0;i<myAnimals.length; i++){ // loop through local array from 0 to length of array ie 3 times
      console.log(i + ": " + myAnimals[i]); // print loop number and animal to terminal when executed
    }
}

listAnimals(); // execute file


//episode4
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';  //globalish variables

var allSuspects = function() {
    var suspectThree = 'Harvey' //new local variable
    console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)  //prints to terminal Jay, Val Harvey and Rick as included suspect
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree ) // prints to terminal Keith as suspect three


//episode 5
var detective = {
        name : 'Ace Ventura',
        pet : 'monkey'
    } // creates object called detective with a name at pet key-value pairs

var printName = function(detective) {
    return detective.name
} // returns the name value from the detective object

var detectiveInfo = function() {
    detective['name'] = 'Poirot'
    return printName(detective);
} // over-writes detective name with "Poirot"

console.log(detectiveInfo()); // returns "Poirot" to terminal

//episode6
var murderer = 'rick'; //globalish variable set murderer to rick

var outerFunction = function(){
    var murderer = 'marc'; // over-writes murderer rick as marc

    var innerFunction = function(){
        murderer = 'valerie'; //over-writes murderer marc as valerie
    }

    innerFunction(); //executes the inner function within the outer function
}

outerFunction(); // executes the outer function
console.log('the murderer is ', murderer); // prints "the murderer is valerie to terminal"


