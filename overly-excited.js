
// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

var addOnSent = ""

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */

	var exclams = ''

     for (i = 0; i < theWordArray.length; i++) {
     	addOnSent = addOnSent +' '+ sentence[i];



     	if ((i+1) % 3 === 0) {
     			     	
	     	exclams = exclams + '!';

     		addOnSent = addOnSent + exclams;
     	}



     	console.log(addOnSent);

     }
}

// Invoke the function and pass in the array
addExcitement(sentence);

