var app = angular.module("HighScore", []);

app.controller("highscoreController", function($scope) {
	$scope.score = sessionStorage.score;
  document.getElementById("score").innerHTML = "Your Score: " + sessionStorage.score;
  
  // set new score
		if(!localStorage.name){
			localStorage.name = angular.toJson([]);
		}

	$scope.allScores=[];
	
	var localJson = angular.fromJson(localStorage.name);
	var length = localJson.length;

  $scope.newScore = function(name){
  	sessionStorage.name = $scope.name;
  	console.log('click', sessionStorage.name, sessionStorage.score);
	
		localJson.unshift({name:$scope.name, score:$scope.score, id:length});
		angular.copy(localJson,$scope.allScores);
		localStorage.name = angular.toJson(localJson);

		console.log($scope.allScores);
	}

});