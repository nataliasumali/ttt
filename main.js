document.getElementById("c0").addEventListener("click", myFunction);
document.getElementById("c1").addEventListener("click", myFunction);
document.getElementById("c2").addEventListener("click", myFunction);
document.getElementById("c3").addEventListener("click", myFunction);
document.getElementById("c4").addEventListener("click", myFunction);
document.getElementById("c5").addEventListener("click", myFunction);
document.getElementById("c6").addEventListener("click", myFunction);
document.getElementById("c7").addEventListener("click", myFunction);
document.getElementById("c8").addEventListener("click", myFunction);

var user = 1

function myFunction() {
	if (user == 1) {
	this.innerHTML = "X";
	user -= 1;
	winner();
	} else {
		this.innerHTML = "O";
		this.style.color = "blue";
		user += 1;
		winner();
	}
}

function winner() {
	if (
	document.getElementById("c0").innerHTML == "X" &&
	document.getElementById("c1").innerHTML == "X" &&
	document.getElementById("c2").innerHTML == "X" ||
	document.getElementById("c3").innerHTML == "X" &&
	document.getElementById("c4").innerHTML == "X" &&
	document.getElementById("c5").innerHTML == "X" ||
	document.getElementById("c6").innerHTML == "X" &&
	document.getElementById("c7").innerHTML == "X" &&
	document.getElementById("c8").innerHTML == "X" ||
	document.getElementById("c0").innerHTML == "X" &&
	document.getElementById("c3").innerHTML == "X" &&
	document.getElementById("c6").innerHTML == "X" ||
	document.getElementById("c1").innerHTML == "X" &&
	document.getElementById("c4").innerHTML == "X" &&
	document.getElementById("c7").innerHTML == "X" ||
	document.getElementById("c2").innerHTML == "X" &&
	document.getElementById("c5").innerHTML == "X" &&
	document.getElementById("c8").innerHTML == "X" ||
	document.getElementById("c0").innerHTML == "X" &&
	document.getElementById("c4").innerHTML == "X" &&
	document.getElementById("c8").innerHTML == "X" ||
	document.getElementById("c2").innerHTML == "X" &&
	document.getElementById("c4").innerHTML == "X" &&
	document.getElementById("c6").innerHTML == "X"
	) {
		alert("Go X!!!"); 
	} else if (
	document.getElementById("c0").innerHTML == "O" &&
	document.getElementById("c1").innerHTML == "O" &&
	document.getElementById("c2").innerHTML == "O" ||
	document.getElementById("c3").innerHTML == "O" &&
	document.getElementById("c4").innerHTML == "O" &&
	document.getElementById("c5").innerHTML == "O" ||
	document.getElementById("c6").innerHTML == "O" &&
	document.getElementById("c7").innerHTML == "O" &&
	document.getElementById("c8").innerHTML == "O" ||
	document.getElementById("c0").innerHTML == "O" &&
	document.getElementById("c3").innerHTML == "O" &&
	document.getElementById("c6").innerHTML == "O" ||
	document.getElementById("c1").innerHTML == "O" &&
	document.getElementById("c4").innerHTML == "O" &&
	document.getElementById("c7").innerHTML == "O" ||
	document.getElementById("c2").innerHTML == "O" &&
	document.getElementById("c5").innerHTML == "O" &&
	document.getElementById("c8").innerHTML == "O" ||
	document.getElementById("c0").innerHTML == "O" &&
	document.getElementById("c4").innerHTML == "O" &&
	document.getElementById("c8").innerHTML == "O" ||
	document.getElementById("c2").innerHTML == "O" &&
	document.getElementById("c4").innerHTML == "O" &&
	document.getElementById("c6").innerHTML == "O"
	) {
		alert("Go O!!!");
}
}