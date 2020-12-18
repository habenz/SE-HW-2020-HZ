// takes two numbers as arguments and returns the largest of them
function maxOfTwoNumbers(x,y){
	if (x>y){
		return x;
	} else {
		return y;
	}
}

// takes three numbers as arguments and returns the largest of them

function maxOfThree(x,y,z) {
	return maxOfTwoNumbers(maxOfTwoNumbers(x,y),z);
}

// that takes a character (i.e. a string of length 1) and returns
// true if it is a vowel, false otherwise

function isCharacterAVowel(char){
	let vowels = 'aeiouAEIOU';
	if (char.length != 1) {
		return false;
	} else {
		return vowels.includes(char);
	}
}

// console.log(isCharacterAVowel('I'));

// adds all numbers in an array
function sumArray(arr){
	return arr.reduce((a,b)=> a+b);
}

// console.log(sumArray([1,2,3,4,5]));

// mutliplies all numbers in an array
function multiplyArray(arr){
	return arr.reduce((a,b)=> a*b);
}

// console.log(multiplyArray([1,2,3,4]));

// returns the number of arguments passed using rest parameters
function countArgs(...args){
	return args.length;
}

// console.log(countArgs(1,2,3,4));

// reverse the given string
function reverseString(str) {
	reverse = []
	for (i=str.length-1;i>=0;i--){
		reverse.push(str[i]);
	}
	return reverse.join('');
}

// console.log(reverseString('abcd'));

// takes an array of words and returns the length of the longest one
// if there are multiple words of the max length, return the latest one in list
// an attempt at a recursive solution

function findLongestWord(arr){
	if (arr.length == 0) {
		return null;
	} else if (arr.length == 1){
		return arr[0];
	} else {
		// console.log(arr[0],arr.slice(1));
		return maxWord(arr[0],findLongestWord(arr.slice(1)));
	}
}

function maxWord(str1,str2){
	if (str1.length > str2.length){
		return str1;
	}
	else {
		return str2;
	}
}

// console.log(findLongestWord(['hi','there','my','guy','seven','haben']));

// takes an array of words and a number i and returns the array of words
// that are longer than i characters long

function filterLongWords(arr, len){
	return arr.filter((word) => word.length > len);
}

// console.log(filterLongWords(['hello','feet','below','me'],4));

// Method added to String class to reverse string 
String.prototype.reverseString = function() {
	return this.split('').reverse().join('');
};

// console.log("Per Scholas".reverseString());

// takes a string and returns an object of character counts in the word
function countCharacters(str){
	let charCounts = {};
	// remove whitespace and disregard case
	let strippedString = str.replace(/\s+/g, '').toLowerCase()
	for (const char of strippedString){
		if (charCounts[char]){
			charCounts[char]++;
		} else {
			charCounts[char] = 1;
		}
	}
	return charCounts;
}

console.log(countCharacters('Per Scholas'));

