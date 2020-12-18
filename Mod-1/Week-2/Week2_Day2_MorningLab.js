// helper function to dectect primes
function isPrime(num){
	if (num<2) {
		return false;
	} else if (num == 2){
		return true;
	} else {
		for (let i= 2; i<=Math.floor(Math.sqrt(num));i++){
			if (num%i == 0){
				return false;
			}
		}
		return true;
	}
}

// 1. Using a while loop, print out all prime numbers between 0 - 20
// assumed to be exclusive on both ends
let i = 1;
while(i<20){
	if(isPrime(i)){
		console.log(i);
	}
	i++;
}

// 2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end
// Note: could also do (20+1)*20/2
let sum = 0;
i = 1; // re-using i variable from #1
while (i<=20){
	sum += i;
	i++;
}
console.log(sum);

//3. Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.)
i = 2;
while (i<=20){
	console.log(i);
	i+=2;
}

// Bonus Logical Question: Find the number of quaters given in change when using
// a 10 dollar bill on a 4 dollar item
let cost = 4;
let spent = 10;
let numQuarters = 0;
while (spent != cost + .25*numQuarters){
	numQuarters++;
}
console.log('number of quarters:',numQuarters); // should print 24 since (10-4)*4 = 24

