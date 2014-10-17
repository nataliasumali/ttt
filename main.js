// create the app
var myApp = angular.module('myApp', []);

// create the controller
myApp.controller('appController', function($scope) {

	// create a reference to firebase database and collection name
	// $scope.remoteGameContainer = 
 // $firebase(new Firebase("https://big-hero-6-tic-tac-toe.firebaseIO.com/databaseGameContainer")) ;
	
	$scope.reset = function() {
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

		$scope.user = 0;
		$scope.count = 0;
		$scope.notification = "";
	}

	$scope.clicked = function(s){

		//if someone already moved on that cell, it won't let any player moves through

		if(s.xoStatus == "X" || s.xoStatus == "O")
		{
			return;
		}
		if($scope.user == 0) {
			s.xoStatus = "X";
			$scope.user -=1;
			$scope.count ++;
			winner("X");
	  } else {
			s.xoStatus = "O";
			$scope.user +=1;
			$scope.count ++;
			winner("O");
		}
	};

	
	// Check to see if there's a win
	var winner = function(oneSquare) {
		console.log("We're checking ...");
		if (
			$scope.squares[0].xoStatus == oneSquare && $scope.squares[1].xoStatus == oneSquare && $scope.squares[2].xoStatus == oneSquare ||
			$scope.squares[3].xoStatus == oneSquare && $scope.squares[4].xoStatus == oneSquare && $scope.squares[5].xoStatus == oneSquare ||
			$scope.squares[6].xoStatus == oneSquare && $scope.squares[7].xoStatus == oneSquare && $scope.squares[8].xoStatus == oneSquare ||
			$scope.squares[0].xoStatus == oneSquare && $scope.squares[3].xoStatus == oneSquare && $scope.squares[6].xoStatus == oneSquare ||
			$scope.squares[1].xoStatus == oneSquare && $scope.squares[4].xoStatus == oneSquare && $scope.squares[7].xoStatus == oneSquare ||
			$scope.squares[2].xoStatus == oneSquare && $scope.squares[5].xoStatus == oneSquare && $scope.squares[8].xoStatus == oneSquare ||
			$scope.squares[0].xoStatus == oneSquare && $scope.squares[4].xoStatus == oneSquare && $scope.squares[8].xoStatus == oneSquare ||
			$scope.squares[2].xoStatus == oneSquare && $scope.squares[4].xoStatus == oneSquare && $scope.squares[6].xoStatus == oneSquare
		)	
		  { 
		  	$scope.notification = "Hooray!!!"
		  	console.log( "Hooray!!!");
			} else if ($scope.count == 8) {
				console.log("It's a tie...");
			}
	};

	//starting the board on the first place
	$scope.reset();

});






























//JavaScript version

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