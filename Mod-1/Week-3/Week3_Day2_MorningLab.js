//Uncomment the lines at the bottom of each section to see the result

// 1. What is an efficient way to create an array for first 50 integers?
// creates a list of the integers from 0 to n-1 
function range(n){
	return [...Array(n).keys()];
	// alternatively, below:
	// return Array.from(Array(n).keys());
}

// console.log(range(50));


// 2. Add an element to an array and log the result

function addElementToArray(arr, element){
	arr.push(element);
	console.log(arr);
}

var shoppingList = [

  "cool ranch doritos","kings hawaiian sweet bread",

  "peanut butter oreos","fruit loops cereal"];

// addElementToArray(shoppingList, "Hendricks gin");

// 3. reverse an array
var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
// console.log(yoda.reverse().join(' '));

// 4.  People been lining up for hours to get the newest iphone release. 
// 	Help manage the unruly crowd of privileged customers by serving them 
// 	one at a time and assiging it to a variable named `nowServing`. 
// 	Console.log this new variable as well as the waitList.
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];

function serveCutomers(customerList){
	while(customerList.length > 0){
		let currentlyServing = customerList.shift();
		console.log("Serving:", currentlyServing,"Still waiting:", customerList.join(', '));
	}
}
 // serveCutomers(waitList);

// 5. Convert array into a string, and log the string
var shoe = ["just", "do", "it"];
let shoeString = shoe.join(' ');
// console.log(shoeString);