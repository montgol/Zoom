var app = angular.module("Ship", []);


app.controller("MainController", function($scope) {
    $scope.tunnelEls = [{
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }, {
        size: '50px',
        color: 'rgb(0,0,0)'
    }];
    var ringLen = $scope.tunnelEls.length;
    var currSize = 1;
    for (var i = 0; i < ringLen; i++) {
        var col = parseInt((255 * (i + 1) / ringLen));
        $scope.tunnelEls[i].color = 'rgb(0,' + col + ',0)'
        $scope.tunnelEls[i].zindex = (i - 8);
        $scope.tunnelEls[i].size = currSize;
        $scope.tunnelEls[i].left = 50;
        $scope.tunnelEls[i].top = 50;
        currSize *= 1.2;
    }
    $scope.currX = 0;
    $scope.currY = 0;
    $scope.timeToChange = 100;
    $scope.currTime = 100;
    $scope.currRing = 0;//used during transition phase;

    var t = setInterval(function() {
        console.log('x', $scope.currX, 'y', $scope.currY, ' Change in ', $scope.currTime);
        if ($scope.currTime > 0) {
            $scope.currTime--;
            if($scope.currRing<ringLen-1){
                $scope.tunnelEls[$scope.currRing].left = (50 + ($scope.currX * 4)) + '%';
                $scope.tunnelEls[$scope.currRing].top = (50 + ($scope.currX * 4)) + '%';
                console.log($scope.tunnelEls[$scope.currRing].top)
            	$scope.currRing++;
            }
        } else {
            $scope.timeToChange--;
            $scope.currTime = $scope.timeToChange;
            //get random vals for wat direction we're movin in
            $scope.currX = Math.floor(Math.random() * 5) - 2;
            $scope.currY = Math.floor(Math.random() * 5) - 2;

            $scope.$apply();
        }

    }, 50);
});