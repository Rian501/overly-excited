// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

var addOnSent = ""

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */


     for (i = 0; i < theWordArray.length; i++) {
     	addOnSent = addOnSent +' '+ sentence[i];

     	if ((i+1) % 3 === 0) {
     		addOnSent = addOnSent + '! ';
     	}


     	console.log(addOnSent);

     }
}

// Invoke the function and pass in the array
addExcitement(sentence);



// Adding Conditions to the Loop

// Then add logic to addExcitement that places an exclamation point (!) after every third word. 
//This will require you to do some basic math in JavaScript, and use an if statement.

// Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 - using the JavaScript 
//remainder operator - then add a single exclamation point (!) to the output.
// Example output:

// The
// The walrus
// The walrus danced!
// The walrus danced! through
// The walrus danced! through the
// The walrus danced! through the trees!
// The walrus danced! through the trees! in
// The walrus danced! through the trees! in the
// The walrus danced! through the trees! in the light!
// The walrus danced! through the trees! in the light! of
// The walrus danced! through the trees! in the light! of the
// The walrus danced! through the trees! in the light! of the moon!
// ...
// Challenge

// Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

// Example output:

// The
// The walrus
// The walrus danced!
// The walrus danced! through
// The walrus danced! through the
// The walrus danced! through the trees!!
// The walrus danced! through the trees!! in
// The walrus danced! through the trees!! in the
// The walrus danced! through the trees!! in the light!!!
// The walrus danced! through the trees!! in the light!!! of
// The walrus danced! through the trees!! in the light!!! of the
// The walrus danced! through the trees!! in the light!!! of the moon!!!!
// ...