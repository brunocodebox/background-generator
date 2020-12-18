
var body = document.getElementById("gradient");
var body2 = document.querySelector("body"); // no need to add id in body

console.log(body);
console.log(body2);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // note the prefix . to specify a class
var color2 = document.querySelector(".color2"); // note the prefix . to specify a class

console.log(css);
console.log(color1);
console.log(color2);

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	// Display the body background in the h3 tag
	// Used to be innerHTML now not recommended.
	css.textContent = body.style.background + ";";
}

function randomRGB() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);	
	var rgbColor = 0x1000000 + b + 0x100 * g + 0x10000 * r;
    return '#' + rgbColor.toString(16).substr(1);
}

function setRandomColors() {
	color1.value = randomRGB();
	color2.value = randomRGB();
	setGradient();
}

// These two functions can be set in the oninput of the color selectors
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Match the color inputs to the background color on entry and display the initial gradient properties
setGradient();

// Add random colors
var random = document.querySelector(".random");
random.addEventListener("click", setRandomColors);