function max (num1, num2) {
	if (num1 >= num2) {
		return num1;
	} else {
		return num2;
	}
}

console.log(max(5,3));

// Input is a num output is a single character string
function getGrade(numGrade) {
	if (numGrade >=90) {
		return "A";
	} else if (numGrade >=80) {
		return "B";
	} else if (numGrade >= 70) {
		return "C";
	} else if (numGrade >= 55) {
		return "D"
	} else {
		return "F";
	}
}

console.log(getGrade(30));

// takes an int representing hour in military time
function fakeDateGreeting(time) {
	if (5 <= time && time < 12) {
		console.log("Good Morning");
	} else if (12 <= time && time < 16) {
		console.log("Good Afternoon");
	} else {
		console.log("Hey there");
	}
}

fakeDateGreeting(15);