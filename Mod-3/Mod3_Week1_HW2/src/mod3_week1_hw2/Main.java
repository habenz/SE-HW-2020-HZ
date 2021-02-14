package mod3_week1_hw2;
import java.util.ArrayList;
import java.util.List;

public class Main {

	public static void main(String[] args) {
		ArrayList<String> stringList = new ArrayList<String>(
				List.of("Hello", "World", "I'm", "exploring", "collections"));
		System.out.println(CollectionManipulation.copyList(stringList));
	}

}
