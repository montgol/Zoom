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
    var currSize=1;
    for (var i = 0; i < ringLen; i++) {
        var col = parseInt((255 * (i + 1) / ringLen));
        $scope.tunnelEls[i].color = 'rgb(0,' + col + ',0)'
        $scope.tunnelEls[i].zindex = (i - 8);
        $scope.tunnelEls[i].size = currSize;
        currSize *=1.2;
    }

});