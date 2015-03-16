var app = angular.module("HighScore", []);

app.controller("highscoreController", function($scope) {
    $scope.score = sessionStorage.score;
    document.getElementById("score").innerHTML = "Your Score: " + $scope.score;

    // set new score
    if (!localStorage.name) {
        localStorage.name = angular.toJson([]);
    }

    $scope.allScores = [];
    //sorting!
    $scope.sortOrder = 'name';
    $scope.nameOrder = 1;
    $scope.scoreOrder = 1;

    $scope.sortMe = function(sortCol) {
        if (!sortCol) {
            //name
            if ($scope.nameOrder) {
                $scope.nameOrder = 0;
                $scope.sortOrder = '-name';
            } else {
                $scope.nameOrder = 1;
                $scope.sortOrder = 'name';
            }

        } else {
            if ($scope.scoreOrder) {
                $scope.scoreOrder = 0;
                $scope.sortOrder = '-score';
            } else {
                $scope.scoreOrder = 1;
                $scope.sortOrder = 'score';
            }
        }
    }

    var localJson = angular.fromJson(localStorage.name);
    var length = localJson.length;
    $scope.entered = false;  // for Okay/PlayAgain Button
    angular.copy(localJson, $scope.allScores);
    $scope.newScore = function(name) {

        localJson = angular.fromJson(localStorage.name);
        length = localJson.length;
        console.log(localJson)
        localJson.unshift({
            name: $scope.name,
            score: $scope.score,
            id: length
        });
        localJson.forEach(function(el){
            el.score = parseInt(el.score);
        })
        angular.copy(localJson, $scope.allScores);
        console.log($scope.allScores)
        localStorage.name = angular.toJson(localJson);
        $scope.entered = true;
    }
	$scope.redirect = function () {
		window.location.href = "/index.html"
	}    


});