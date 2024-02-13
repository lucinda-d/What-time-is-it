var time = new Date().getHours();

//console.log(time);
var greeting = "Hi";
var name = "Lucy";

if (time < 12) {
  greeting = "Good Morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  console.log("Time for bed!!");
}

alert(`${greeting}, ${name}!`);
