var app = angular.module("Ship", []);


app.controller("MainController", function($scope) {
    $scope.tunnelEls = [{
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }, {
        size: '50px',
        left: 50,
        top: 50
    }];
    var ringLen = $scope.tunnelEls.length;
    var currSize = 1;
    for (var i = 0; i < ringLen; i++) {
        var col = parseInt((255 * (i + 1) / ringLen));
        $scope.tunnelEls[i].color = 'rgb(0,' + col + ',0)';
        $scope.tunnelEls[i].zindex = (i - 8);
        $scope.tunnelEls[i].size = currSize;
        $scope.tunnelEls[i].left = 50;
        $scope.tunnelEls[i].top = 50;
        currSize *= 1.2;
    }
    var currX = 0;
    var currY = 0;
    var timeToChange = 100;
    var currTime = 100;
    var currRing = 0; //used during transition phase;
    $scope.stepHue = 240; //number of sequences passed, in hue form!

    var t = setInterval(function() {
        if (currTime > 0) {
            //in a 'straight' phase
            currTime -= 0.5;
            if (currRing < 23) {
                //changing rings!
                //still more rings to move
                for (var i = 0; i <= currRing; i++) {
                    if ($scope.tunnelEls[i] && $scope.tunnelEls[i].left < currX) {
                        //ring exists, left of targ
                        $scope.tunnelEls[i].left++;
                    } else if ($scope.tunnelEls[i] && $scope.tunnelEls[i].left > currX) {
                        //ring exists, right of targ
                        $scope.tunnelEls[i].left--;
                    }
                    if ($scope.tunnelEls[i] && $scope.tunnelEls[i].top < currY) {
                        //ring exists, right of targ
                        $scope.tunnelEls[i].top++;

                    } else if ($scope.tunnelEls[i] && $scope.tunnelEls[i].top > currY) {
                        //ring exists, right of targ
                        $scope.tunnelEls[i].left--;
                    }
                }
                
                currRing++;
            }
            var ringToGlow = 18 - (currTime % ringLen);
            for (var i = 0; i < ringLen; i++) {
                //find the one grey ring
                if (i == ringToGlow) {
                    $scope.tunnelEls[i].sat = 50;
                } else {
                    $scope.tunnelEls[i].sat = 100;
                }
            }
            $scope.$apply();
        } else {
            if ($scope.stepHue) {
                $scope.stepHue -= 20;
                console.log('hue:', $scope.stepHue)
            } else {
                $scope.stepHue = 360;
            }
            //in a 'turn' phase. or rather a 'pick new turn dir' phase
            timeToChange -= .5;
            currTime = timeToChange;
            //get random vals for what direction we're movin in
            currX = 50 + ((Math.floor(Math.random() * 5) - 2) * 8);
            currY = 50 + ((Math.floor(Math.random() * 5) - 2) * 8);
            currRing = 0; //reset ring to change
            $scope.$apply();
        }

    }, 25);
});