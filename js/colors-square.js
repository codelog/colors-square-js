const colorTxt = document.getElementById('colorHex');
const colorBg = document.getElementById('colorWp');

//  TIMER FUNCTION INTERVAL
let x = setInterval(function() {

	let color = "#";

	//  RANDOM COLOR
	color += Math.random().toString(16).slice(2, 8).toUpperCase();

	//  OUTPUT
	colorBg.style.backgroundColor = color;
	colorTxt.innerText = color;
	
}, 5000);