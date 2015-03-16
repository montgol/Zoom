var app = angular.module("shipMobile", []);
var socket = io();

app.controller("mobileController", function($scope) {
    var hasBuzzed = 0;
    $scope.horiz = 0;
    $scope.vert = 0;

    window.addEventListener('deviceorientation', function(e) {
        var moveObj = {
            roll: e.gamma,
            pitch: e.beta
        };
        var vert = (100 * (moveObj.pitch + 90) / 180);
        var horiz = (100 * (moveObj.roll + 90) / 180);

        $scope.horiz = horiz;
        $scope.vert = vert;
        $scope.ind();
        $scope.$apply();
        socket.emit('controlMove', moveObj);
    });
    socket.on('crash', function(errBit) {
        if (!hasBuzzed) {
            window.navigator.vibrate(200);
        }
    });
    $scope.ind = function() {
        $('#vertInd').css({
            'left': $scope.horiz + 'vw'
        });
        $('#horizInd').css({
            'top': $scope.vert + 'vh'
        });
        $('#vertIndTube').css({
            'top': ($scope.vert-2) + 'vh'
        });
        $('#gearOne').css({'transform':'rotate('+($scope.horiz*12)+'deg)'});
        $('#gearTwo').css({'transform':'rotate('+($scope.horiz*-12)+'deg)'});

    };
});