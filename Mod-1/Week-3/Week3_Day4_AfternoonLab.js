class Animal {
	constructor(name, age, color, legs, superPower) {
		this.name = name;
		this.age = age;
		this.color = color;
		this.legs = legs; // number of legs??
		this.superPower = superPower; // a string description of a power
	}

	userSuperPower() {
		console.log(`OMG! ${this.name} can ${this.superPower}!!`);
	}

	loseALeg() {
		console.log(`Bad luck! Gotta stay away from those traps`);
		this.legs = Math.max(this.legs -1, 0);
		return this.legs;
	}

	paint(color) {
		this.color = color;
		console.log(`Wow, ${this.name} looks so beautiful when they're ${this.color}`)
		return this.color;
	}
}

let flyingFish = new Animal("Nemo", 1, "orange", 0, "fly like a bird");
let laserTurtle = new Animal("turtle-ly", 50, "green", 4, "shoot lasers");

console.log(laserTurtle.loseALeg());
flyingFish.paint("red");
laserTurtle.userSuperPower();

class User {
	constructor(firstName, lastName, department) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.department = department;
	}

	changeDepartment(newDepartment) {
		this.department = newDepartment;
		return this.department;
	}
}

// helper function to make changeDepartment method effect clear
function displayJobChange(oldJob, newJob, name) {
	console.log(`${name} used to be at ${oldJob} but now they work at ${newJob} department`)
}

let haben = new User("Haben", "Zaid", "Student");
displayJobChange(haben.department, haben.changeDepartment("Software"), haben.firstName);

let salah = new User("Salah", "Sheber", "Tech");
salah.changeDepartment("Education");

let jordan = new User("Micheal", "Jordan", "Basketball");
jordan.changeDepartment("Baseball"); // a mistake
