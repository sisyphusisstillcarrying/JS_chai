let numberofGuest = 4;

let pizzaSize;
// small <= 2
// medium <= 5
// large

// 5 <= 5 checks two conditions at the same time i.e === and < 

if (numberofGuest <= 2) {
  pizzaSize = "small";
} else if (numberofGuest <= 5) {
  pizzaSize = "medium";
} else {
  pizzaSize = "large";
}

console.log(pizzaSize);

// uninary operators and binary operators
