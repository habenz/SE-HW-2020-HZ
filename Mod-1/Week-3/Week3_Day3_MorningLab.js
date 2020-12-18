class Snack {
	// name is a string, price is a number
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

class VendingMachine {
	// takes an array of snacks 
	constructor(snacks){
		this.snacks = snacks;
	}

	vend(snackIndex) {
		return this.snacks[snackIndex];
	}
}

let snack1 = new Snack("Cheetos", 1.5);
let snack2 = new Snack("M&M's", 1);
let snack3 = new Snack("Skittles", .75);

let vendingMachine = new VendingMachine([snack1,snack2,snack3]);

console.log(vendingMachine.vend(0));