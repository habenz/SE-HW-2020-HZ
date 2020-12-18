// reference: https://ilikekillnerds.com/2015/06/abstract-classes-in-javascript/

// 	https://medium.com/@_kamerontanseli/quick-guide-to-using-interfaces-with-javascript-5a557f635e11


// var required = function(){ throw new Error("Implement!"); };
// var PlanarShapeInterface = {
//     circle_area: required,
//     total_sides: required
// };

// 1. Define a new class called Circle with appropriate
// 	attributes and instantiate a few Circle objects
class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	circle_area() {
		return Math.PI*Math.pow(this.radius,2);
	}

	total_sides(){
		// Circles have an infinite number of sides
		return 'Infinity';
	}
}

let unitCircle = new Circle(1);
let bigCircle = new Circle(15);

console.log(unitCircle.total_sides()); 
console.log(bigCircle.circle_area()); // around 706

// 2. Define a new class called Rectangle with appropriate
// 	attributes and instantiate a few Rectangle objects
class Rectangle {
	constructor(height,width) {
		this.sides = 4;
		this.height = height;
		this.width = width;
	}

	rectangle_area() {
		return this.height*this.width;
	}

	total_sides() {
		return this.sides;
	}
}

let skinnyAndTall = new Rectangle(10,2);
let wideAndShort = new Rectangle(3,7);
console.log(skinnyAndTall.rectangle_area()); //should be 20
console.log(wideAndShort.total_sides()); //should be 4

// 3. Define a new class called Square with appropriate
// 	attributes and instantiate a few Square objects

class Square extends Rectangle{
	constructor(side_length){
		super(side_length,side_length);
	}

	square_area() {
		return super.rectangle_area();
	}
}

let smallSquare = new Square(1.5);
let bigSquare = new Square(50);

console.log(smallSquare.square_area());
console.log(bigSquare.total_sides());