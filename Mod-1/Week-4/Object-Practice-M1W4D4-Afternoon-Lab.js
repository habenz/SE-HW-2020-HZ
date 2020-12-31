class Pet {
	constructor(name, ownerName) {
		this.name = name;
		this.ownerName = ownerName;
	}

	walk() {
		console.log('walka walka');
	}
}

let bolt = new Pet("Bolt", "Haben");
console.log(bolt);
bolt.walk();

class Dog extends Pet {
	constructor(name, ownerName, price) {
		super(name, ownerName);
		this.price = price;
	}

	bark() {
		console.log('bark');
	}

	chaseTail() {
		console.log('oh boy oh boy oh boy');
	}

	getPrice() {
		return this.price;
	}
}

let bob = new Dog('Bob', 'SHELTER', 200);
console.log(bob);
bob.bark();
bob.chaseTail();
console.log(bob.getPrice());

class Cat extends Pet {
	constructor(name, ownerName, price) {
		super(name, ownerName);
		this.price = price;
	}

	purr() {
		console.log('purrrrr');
	}

	clean() {
		console.log('cleaning');
	}

	getPrice() {
		return this.price;
	}

	walk() {
		console.log('strut strut');
	}
}

let princess = new Cat('Princess', 'Haben', 250);
console.log(princess);
princess.purr();
princess.clean();
console.log(princess.getPrice());
princess.walk();

// Updating properties of objects after creation
bob.ownerName = 'Haben';
princess.name = 'Queen';
console.log(bob);
console.log(princess);