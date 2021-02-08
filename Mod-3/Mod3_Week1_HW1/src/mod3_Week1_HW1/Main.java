package mod3_Week1_HW1;

public class Main {

	public static void main(String[] args) {
		System.out.println("out of bounds: "+getUp(true, -1));
		System.out.println("squawking late: "+getUp(true, 23));
		System.out.println("squawking early: "+getUp(true, 3));
		System.out.println("squawking during the day: "+getUp(true, 12));
		System.out.println("not squawking at night: "+getUp(false, 1));
		System.out.println("not squawking during the day: "+getUp(false, 4));
	}
	
	private static boolean getUp(boolean squawking, int currentHour) {
		if (currentHour<0 || currentHour>23) {
			// should probably throw exception or something instead
			System.out.println("Error: hours out of bounds");
			return false;
		}
		if (currentHour < 6 || currentHour>22) {
			return squawking;
		}
		
		return false;
		
	}

}
