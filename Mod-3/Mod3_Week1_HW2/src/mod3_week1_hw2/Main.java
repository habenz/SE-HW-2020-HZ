package mod3_week1_hw2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Main {
// Example uses for most methods. Examples of trimToSize and toPrimitiveArray omitted
	
	public static void main(String[] args) {
		List<String> stringList = new ArrayList<String>(
				List.of("Hello", "world", "I'm", "exploring", "collections"));
		
		System.out.println("copied: "+CollectionManipulation.copyList(stringList));
		System.out.println("sliced (2,3): "+ CollectionManipulation.sliceList(stringList, 2, 3));
		CollectionManipulation.swap(stringList, 1, 4);
		System.out.println("swapped (1,4): "+ stringList);
		System.out.println("is stringList empty? "+ CollectionManipulation.isEmpty(stringList));
		
		List<Integer> fibList = Arrays.asList(1, 1, 2,3,5,8);
		CollectionManipulation.replaceSecondWith(fibList, 100);
		System.out.println("replaced second element: "+fibList);
		
		Set<Double> harmonic = new HashSet<Double>();
		System.out.println("is set empty? "+ CollectionManipulation.isEmpty(harmonic));
		
		harmonic.addAll(List.of(1.0, 0.5, 0.33, 0.25, 0.2, 0.1667));
		System.out.println("set is of size: "+ CollectionManipulation.getSetSize(harmonic));
		System.out.println("printing out set...");
		CollectionManipulation.printAllElements(harmonic);
		
		Set<Double> halvingFromTwo = new HashSet<Double>();
		halvingFromTwo.addAll(List.of(2.0, 1.0, 0.5, 0.25, 0.125));
		
		System.out.println("harmonic instersect halvingFromTwo: "+ 
				CollectionManipulation.intersect(harmonic, halvingFromTwo));
		
		
	}

}
