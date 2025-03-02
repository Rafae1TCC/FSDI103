console.log("Conditionals");

if (3 < 5) {
  console.log("This is true");
}

let student1 = 45;
let student2 = 25;

if (student1 == student2) {
  console.log("The values are the same");
}

let isTrue = false;

if (isTrue == true) {
  console.log("Yes");
} else {
  console.log("No");
}

let age = 21;

if ((age) => 13) {
  console.log("You are an adult");
} else if (age >= 21) {
  console.log("You are a teenager");
} else if (age >= 64) {
  console.log("You are an adult");
} else {
  console.log("You are a senior");
}

function MovieCalc() {
  let ticket = 0;

  let client = prompt("Enter your age");
  if (client <= 12) {
    ticket = 5;
    console.log(ticket);
  } else if (client > 12 && client < 18) {
    ticket = 8;
    console.log(ticket);
  } else {
    ticket = 10;
    console.log(ticket);
  }
}

MovieCalc();

document.getElementById("submit").addEventListener("click", function () {
  let temp = document.getElementById("temp").value;
  let outfitSuggestion = "";

  if (temp >= 25) {
    outfitSuggestion = "Wear shorts and a t-shirt.";
  } else if (temp >= 15) {
    outfitSuggestion = "Wear jeans and a light jacket.";
  } else {
    outfitSuggestion = "Wear a coat, scarf, and gloves.";
  }

  document.getElementById("outfit").innerText = outfitSuggestion;
});
