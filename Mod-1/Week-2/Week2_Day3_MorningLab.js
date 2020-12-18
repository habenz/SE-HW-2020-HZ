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

// takes a String less than 10 charaters and returns the number of vowels
function vowelCount(str){
	if (str.length > 10){
		return null;
	} else {
		let count = 0;
		for (char of str){
			if (isCharacterAVowel(char)){
				count++
			}
		}
		return count;
	}
}

// console.log(vowelCount('hELloaih'));