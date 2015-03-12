var socket = io();
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
var buzz;
if (navigator.vibrate) {
    //buzz!
}


//if it's a phone, listen for controls
window.addEventListener('deviceorientation', function(e) {
    var moveObj={
    	roll:e.gamma,
    	pitch:e.beta
    }
    socket.emit('controlMove', moveObj);
});
socket.on('crash', function() {
    //do some fancy shmancy crashy stuff
});