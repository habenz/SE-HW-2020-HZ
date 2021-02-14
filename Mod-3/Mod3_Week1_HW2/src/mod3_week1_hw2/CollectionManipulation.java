package mod3_week1_hw2;

import java.util.ArrayList;
import java.util.List;

public class CollectionManipulation {
	
	public static <T> List<T> copyList(List<T> list){
		// could I just use ArrayList clone?
		List<T> copy = new ArrayList<T>();
		for(T item: list) {
			copy.add(item);
		}
		return copy;
	}
}
