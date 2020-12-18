let arr1 = [1,7,11,13,20,30,33,38,45];
let arr2 = [2,5,12,15,22];
// let arr3 = [3,4,10]
//1,2,5,7,11,12

// output should be [1,2,5,7,11,12,13,15,20,22]
let output = [];

let pointer1 = 0;
let pointer2 = 0;

// while output doesn't have all elements in the list
while (output.length < arr1.length + arr2.length ){
	//first check if we still have items to add from both lists
	if (arr1[pointer1] && arr2[pointer2]){
		// thing at first finger is smaller
		if (arr1[pointer1] < arr2[pointer2]){
			// add it to output, and move finger
			output.push(arr1[pointer1]);
			pointer1++;
		} else { // second finger must be smaller
			output.push(arr2[pointer2]);
			pointer2++;
		}
	} else if (arr1[pointer1]){ //undefined values give false when evaluated as boolean
		output.push(arr1[pointer1]);
		pointer1++;
	} else if (arr2[pointer2]){
		output.push(arr2[pointer2]);
		pointer1++;
	}
}

console.log(output);