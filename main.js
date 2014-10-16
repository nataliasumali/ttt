var myApp = angular.module('myApp', []);

myApp.controller('appController', function($scope) {
	$scope.squares = [
		{xoStatus: "c0"},
		{xoStatus: "c1"},
		{xoStatus: "c2"},
		{xoStatus: "c3"},
		{xoStatus: "c4"},
		{xoStatus: "c5"},
		{xoStatus: "c6"},
		{xoStatus: "c7"},
		{xoStatus: "c8"}
	];

	$scope.user = 1;

	$scope.myFunction = function(oneSquare) {
		if ($scope.user == 1) {
			oneSquare.xoStatus = "X";
			$scope.user -= 1;
			console.log(oneSquare.xoStatus);
		} else {
			oneSquare.xoStatus = "O";
			$scope.user += 1;
			console.log(oneSquare.xoStatus);
		}
	}
})





































// document.getElementById("c0").addEventListener("click", myFunction);
// document.getElementById("c1").addEventListener("click", myFunction);
// document.getElementById("c2").addEventListener("click", myFunction);
// document.getElementById("c3").addEventListener("click", myFunction);
// document.getElementById("c4").addEventListener("click", myFunction);
// document.getElementById("c5").addEventListener("click", myFunction);
// document.getElementById("c6").addEventListener("click", myFunction);
// document.getElementById("c7").addEventListener("click", myFunction);
// document.getElementById("c8").addEventListener("click", myFunction);

// var user = 1

// function myFunction() {
// 	if (user == 1) {
// 	this.innerHTML = "X";
// 	user -= 1;
// 	winner();
// 	} else {
// 		this.innerHTML = "O";
// 		this.style.color = "blue";
// 		user += 1;
// 		winner();
// 	}
// }

// function winner() {
// 	if (
// 	document.getElementById("c0").innerHTML == "X" &&
// 	document.getElementById("c1").innerHTML == "X" &&
// 	document.getElementById("c2").innerHTML == "X" ||
// 	document.getElementById("c3").innerHTML == "X" &&
// 	document.getElementById("c4").innerHTML == "X" &&
// 	document.getElementById("c5").innerHTML == "X" ||
// 	document.getElementById("c6").innerHTML == "X" &&
// 	document.getElementById("c7").innerHTML == "X" &&
// 	document.getElementById("c8").innerHTML == "X" ||
// 	document.getElementById("c0").innerHTML == "X" &&
// 	document.getElementById("c3").innerHTML == "X" &&
// 	document.getElementById("c6").innerHTML == "X" ||
// 	document.getElementById("c1").innerHTML == "X" &&
// 	document.getElementById("c4").innerHTML == "X" &&
// 	document.getElementById("c7").innerHTML == "X" ||
// 	document.getElementById("c2").innerHTML == "X" &&
// 	document.getElementById("c5").innerHTML == "X" &&
// 	document.getElementById("c8").innerHTML == "X" ||
// 	document.getElementById("c0").innerHTML == "X" &&
// 	document.getElementById("c4").innerHTML == "X" &&
// 	document.getElementById("c8").innerHTML == "X" ||
// 	document.getElementById("c2").innerHTML == "X" &&
// 	document.getElementById("c4").innerHTML == "X" &&
// 	document.getElementById("c6").innerHTML == "X"
// 	) {
// 		alert("Go X!!!"); 
// 	} else if (
// 	document.getElementById("c0").innerHTML == "O" &&
// 	document.getElementById("c1").innerHTML == "O" &&
// 	document.getElementById("c2").innerHTML == "O" ||
// 	document.getElementById("c3").innerHTML == "O" &&
// 	document.getElementById("c4").innerHTML == "O" &&
// 	document.getElementById("c5").innerHTML == "O" ||
// 	document.getElementById("c6").innerHTML == "O" &&
// 	document.getElementById("c7").innerHTML == "O" &&
// 	document.getElementById("c8").innerHTML == "O" ||
// 	document.getElementById("c0").innerHTML == "O" &&
// 	document.getElementById("c3").innerHTML == "O" &&
// 	document.getElementById("c6").innerHTML == "O" ||
// 	document.getElementById("c1").innerHTML == "O" &&
// 	document.getElementById("c4").innerHTML == "O" &&
// 	document.getElementById("c7").innerHTML == "O" ||
// 	document.getElementById("c2").innerHTML == "O" &&
// 	document.getElementById("c5").innerHTML == "O" &&
// 	document.getElementById("c8").innerHTML == "O" ||
// 	document.getElementById("c0").innerHTML == "O" &&
// 	document.getElementById("c4").innerHTML == "O" &&
// 	document.getElementById("c8").innerHTML == "O" ||
// 	document.getElementById("c2").innerHTML == "O" &&
// 	document.getElementById("c4").innerHTML == "O" &&
// 	document.getElementById("c6").innerHTML == "O"
// 	) {
// 		alert("Go O!!!");
// }
// }