// function printStatusCode(code: number | string) {
//   return `My status code is ${code}.`;
// }

// console.log(printStatusCode(404));
// console.log(printStatusCode("505"));

function printStatusCode(code: number | string) {
  if (typeof code === "number") {
    console.log(code.toFixed(2));
  }

  if (typeof code === "string") {
    console.log(code.toUpperCase());
  }
}



printStatusCode(555.5555555)
printStatusCode("Bangladesh")