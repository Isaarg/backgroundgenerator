var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
	color1.value='#'
	+Math.floor(Math.random()*255).toString(16)
	+Math.round(Math.random()*255).toString(16)
	+Math.round(Math.random()*255).toString(16);
	setGradient();
	color2.value='#'
	+Math.floor(Math.random()*255).toString(16)
	+Math.round(Math.random()*255).toString(16)
	+Math.round(Math.random()*255).toString(16);
	console.log(color1.value);
	

})

/*body.style.background = "linear-gradient(to right," 
+ Math.floor(Math.random()*256)
+ ", "
+ Math.floor(Math.random()*256)
+ ")";*/
