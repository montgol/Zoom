var socket = io();
// navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
// var buzz;
// if (navigator.vibrate) {
//     //buzz!
// }
var hasBuzzed = 0;


//if it's a phone, listen for controls
window.addEventListener('deviceorientation', function(e) {
    var moveObj = {
        roll: e.gamma,
        pitch: e.beta
    }
    socket.emit('controlMove', moveObj);
});
socket.on('crash', function(errBit) {
    if (!hasBuzzed) {
        window.navigator.vibrate(200);
    }

});
window.onclick = function(){
	socket.emit('fire',{nothin:'here'})
}