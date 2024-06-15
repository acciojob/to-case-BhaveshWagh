function toCase(text) {
  // write your code here
	let toLower = text.toLowerCase()
let toUpper = text.toUpperCase()
return `${toLower}-${toUpper}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
