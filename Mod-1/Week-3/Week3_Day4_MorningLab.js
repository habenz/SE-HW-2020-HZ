class Fish {
	Swim() {
		console.log("fish goes swim swim swim");
	}
}

class Nemo extends Fish{
	constructor(color) {
		super();
		this.color = color;
	}
}

let nemo = new Nemo("orange");
nemo.Swim();

// nemo can swim since it inherits the swim method from fish

// references: https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html#:~:text=Abstract%20classes%20are%20similar%20to,protected%2C%20and%20private%20concrete%20methods.
// https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html

// 2. Interfaces define methods that inheriting classes must implement, but
// 	contains no implementations. Abstract classes contain a mix of implemented
// 	and not implemented methods as well as properties or fields. Neither
// 	interfaces nor abstract classes can be instantiated. This is the expected
// 	behavior from Java but JS has no built in concept of abstract classes or
// 	interfaces.

// 3. Only abstract classes can have methods with implementations.