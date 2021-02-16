package mod3_week1_hw2;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class CollectionManipulation {
	
	// similar to ArrayList clone
	public static <T> List<T> copyList(List<T> list){
		List<T> copy = new ArrayList<T>();
		for(T item: list) {
			copy.add(item);
		}
		return copy;
	}
	
	// similar to List subList
	public static <T> List<T> sliceList(List<T> list, int fromIndex){
		List<T> slice = new ArrayList<T>();
		if (fromIndex >= list.size()) {
			return slice;
		}
		
		for(int i= fromIndex; i<list.size(); i++) {
			slice.add(list.get(i));
		}
		return slice;	
	}
	
	public static <T> List<T> sliceList(List<T> list, int fromIndex, int toIndex){
		List<T> slice = new ArrayList<T>();
		if (fromIndex >= list.size() || fromIndex > toIndex) {
			return slice;
		}
		
		for(int i= fromIndex; i<list.size() && i<toIndex; i++) {
			slice.add(list.get(i));
		}
		return slice;	
	}
	
	//	Write a Java program of swap two elements in an array list
	public static <T> void swap(List<T> list, int index1, int index2) {
		if (index1 < list.size() && index2 < list.size()) {
			T temp = list.get(index1);
			list.set(index1, list.get(index2));
			list.set(index2, temp);
		}
	}
	
	//	Write a Java program to test an array list is empty or not
	public static <T> boolean isEmpty(List<T> list) {
		return list.size() == 0;
	}
		
	//	Write a Java program to replace the second element of a ArrayList with the specified element.
	public static <T> void replaceSecondWith(List<T> list, T replacement) {
		if (list.size()>=2) {
			list.set(1, replacement);
		}
	}
	
	//	Write a Java program to trim the capacity of an array list the current list size
	// ArrayList has trimToSize()
	public static <T> void trimCapacity(ArrayList<T> list) {
		list.trimToSize();
	}	
	
	//	 Write a Java program to test a hash set is empty or not.
	public static <T> boolean isEmpty(Set<T> set) {
		return set.isEmpty();
	}
	
	//	Write a Java program to get the number of elements in a hash set
	public static <T> int getSetSize(Set<T> set) {
		return set.size();
	}
	//	Write a Java program to iterate through all elements in a hash list.
	public static <T> void printAllElements(Set<T> set) {
		for (T element: set) {
			System.out.println("Set Element: "+element);
		}
	}
	
	//	Write a Java program to convert a hash set to an array.
	// can't return T[] https://www.baeldung.com/java-generic-array
	public static <T> Object[] toPrimitiveArray(Set<T> set) {
		return set.toArray();
	}
	
	//	Write a Java program to compare two sets and retain elements which are same on both sets.
	// set1.retainAll(set2) will make set1 be the intersection of the sets, below is a non mutating method
	public static <T> Set<T> intersect(Set<T> set1, Set<T> set2) {
		Set<T> intersect = new HashSet<T>();
		for (T element : set1) {
			if (set2.contains(element)) {
				intersect.add(element);
			}
		}
		
		return intersect;
	}
	
}
