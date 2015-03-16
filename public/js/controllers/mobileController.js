var app = angular.module("shipMobile", []);


app.controller("mobileController", function($scope) {
    $scope.score = sessionStorage.score;

});