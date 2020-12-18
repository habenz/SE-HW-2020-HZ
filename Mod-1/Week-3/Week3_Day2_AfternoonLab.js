//Uncomment the lines at the bottom of each section to see the result

//1. Remove Bonner and assign him to a new variable named `notHof` 
// Console.log this new variable as well as the original list.*/

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
let notHof = hof.pop();
// console.log("notHof:",notHof,"real Hofs:",hof.join(", "))

//2.  remove "McLinguine" and "McChar-Siu Bau" and console.log the updated testMenu.*/

var testMenu = [
"McPizza Burger","McFly Burger","McLinguine",
"McChar-Siu Bau","McChop-Chae","McPancit"];

//remove McLinguine
let toRemove = testMenu.findIndex(item => item === "McLinguine");
testMenu.splice(toRemove,1);
//remove McChar-Siu Bau
toRemove = testMenu.findIndex(item => item === "McChar-Siu Bau");
testMenu.splice(toRemove,1);

// console.log(testMenu);

//3. combine two arrays into a new array called `oneLove`. log this new array.

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];

let oneLove = westSide.concat(eastSide);
// console.log(oneLove);

//4. Unfriend the following from your facebook:"Yeezy", "Kimmy K" and "Lamar Odom". 
// assign them to a new variable named `unFriend`. log this new variable.*/

var fbFriends = [
"Khalid","Yeezy","Kimmy K",
"Lamar Odom","Lebron","Warren Buffet"];

let toUnfriend = new Set(["Yeezy", "Kimmy K", "Lamar Odom"]);
let unFriend = [];
// https://stackoverflow.com/questions/9882284/looping-through-array-and-removing-items-without-breaking-for-loop
for (let i = fbFriends.length-1; i>=0; i-- ){
	if (toUnfriend.has(fbFriends[i])){
		unFriend.push(fbFriends[i]);
		fbFriends.splice(i,1);
	}
}
// console.log(unFriend);

//5.  create a user profile using map where following keys. 

let user1 = {
first_name: "Salah",
last_name: "Sheber",
company: "Per Scholas",
department: "Board Staff"
};

// console.log(user1);