var socket = io();
var hasBuzzed = 0;

window.addEventListener('deviceorientation', function(e) {
    var moveObj = {
        roll: e.gamma,
        pitch: e.beta
    }
    socket.emit('controlMove', moveObj);
    ind(moveObj);
});
socket.on('crash', function(errBit) {
    if (!hasBuzzed) {
        window.navigator.vibrate(200);
    }

});

