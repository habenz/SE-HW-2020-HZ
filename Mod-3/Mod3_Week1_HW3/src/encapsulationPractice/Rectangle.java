package encapsulationPractice;

public class Rectangle {
	private double width;
	private double length;
	
	public Rectangle(double width, double length) {
		if (width > 0 ) {
			this.setWidth(width);
		} else {
			this.setWidth(0);
		}
		if (length > 0 ) {
			this.setLength(length);
		} else {
			this.setLength(0);
		}
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		if (width > 0) {
			this.width = width;
		}
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		if (length > 0) {
			this.length = length;
		}
	}
	
	public double getArea() {
		return this.width * this.length;
	}
}
