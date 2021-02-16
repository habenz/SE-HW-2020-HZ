package encapsulationPractice;

public class Cuboid extends Rectangle {
	
	private double height;

	public Cuboid(double width, double length, double height) {
		super(width, length);
		if (height > 0) {
			this.setHeight(height);
		} else {
			this.setHeight(0);
		}
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		if (height > 0) {
			this.height = height;
		}
	}
	
	public double getVolume() {
		return this.height * this.getArea();
	}

}
