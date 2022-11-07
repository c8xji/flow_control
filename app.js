// question 1
let num1 = 79;
function oddoreven(result) {
  console.log("This is an "+result+"number.");
}
if (num1 % 2 === 0) {
  oddoreven("even ");
} else if (num1 % 2 === 1) {
  oddoreven("odd ");
} else {
  console.log("error: The number is not an integer.");
}

// question 2
let numA = 600/3.14;
let numB = 5*49/1.2;
function compare(answer) {
  console.log(answer+" is the bigger one.");
}
if (numA > numB) {
  compare("numA");
} else if (numA === numB) {
  console.log("they have the same value.");
} else {
  compare("numB");
}

// question 3
for (let i=1; i<10; i++) {
  for (let j=1; j<10; j++) {
    console.log(i+" x "+j+" = "+i*j);
  }
}

// question 4
let triangle = "";
let height = 6;
for (let i=1; i<=height; i++) {
  let space = "";
  for (let j=1; j<=height-i; j++) {
    space += " ";
  }
  let symbol = "";
  for (let k=1; k<=2*i-1; k++) {
    symbol += "▲";
  }
triangle += space + symbol + "\n";
}
console.log(triangle);

// question 5
let rev_triangle = "";
let rev_height = 6;
for (let i=1; i<=rev_height; i++) {
  let rev_space = "";
  for (let j=1; j<i; j++) {
    rev_space += " ";
  }
  let rev_symbol = "";
  for (let k=-rev_height*2+1; k<=2*-i+1; k++) {
    rev_symbol +="▼";
  }
  rev_triangle += rev_space + rev_symbol + "\n";
}
console.log(rev_triangle);

// question 6
function is_prime_number (n) {
  if (n===2 || n===3) {
    return true;
  } else if (n>4) {
    const m = n%6;
    if (m!==1 && m!==5) {
      return false;
    }
    const nSqrt = Math.floor(Math.sqrt(n));
    for (let i=5; i<=nSqrt; i+=6) {
      if (n%i===0 || n%(i+2)===0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
// console.log(is_prime_number(178417));
function get_prime_number (min, max) {
  const result = [];
  if (min<2 && max>=2) {
    result.push(2);
    min = 3;
  } else if (min%2===0) {
    if (min===2) {
      result.push(2);
    }
    min+=1;
  }
  for (let n=min; n<=max; ++n) {
    if (is_prime_number(n)) {
      result.push(n);
    }
  }
  return result;
}
console.log(get_prime_number(1, 71791));