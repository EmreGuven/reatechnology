/* SENARYO-1 */
console.log("SENARYO-1");
let n = 11;
const middle = Math.ceil(n / 2);

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    row += "*";
  }
  if (i === middle) {
    const middleStringIndex = Math.round(row.length / 2 + 1);
    row =
      row.substring(0, middleStringIndex) +
      "REA" +
      row.substring(middleStringIndex + 3);
  }
  console.log(row);
}

/* SENARYO-2 */

console.log("SENARYO-2");

let x = parseInt(prompt("Bir sayı giriniz:"));
let row = "";

if(x > 3) {
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j < x - i; j++) {
      row += " ";
    }
  
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    if ((i + 1) % 3 === 0) {
      row = row.slice(0, -3);
      row += "REA";
    }
    row += "\n";
  }
  console.log(row);
} else{
  alert("Lütfen 3'ten büyük bir sayı giriniz.")
}
