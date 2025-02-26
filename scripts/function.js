function welcome() {
  let name2 = prompt("Enter your name:");
  let age2 = prompt("Enter your age:");
  console.log(`Welcome ${name2} - ${age2}`);
}

function add(num1 = 0, num2 = 0) {
  console.log(`the total is ${num1} + ${num2} = ${num1 + num2} </p>`);
  document.write(`<p>The total is ${num1} + ${num2} = ${num1 + num2} </p>`);
}

add();
add(57.6, 38.4);
add(54.3, 100);

function combineNames(firstName = "Unknown", lastName = "Unknown") {
  console.log(`${firstName} ${lastName}`);
}

combineNames("Alice", "Johnson");
combineNames("Alice");
combineNames();

function convertToSeconds() {
  let minutes = prompt("Enter the minutes");
  let seconds = minutes * 60;
  document.getElementById("results").innerHTML += "<p>" + seconds + "s </p>";
}
