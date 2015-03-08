var socket = io();

window.addEventListener('deviceorientation', function(e) {
    var pitch = Math.floor((Math.max(0, Math.min(e.beta, 90)) / 90) * 360)
    socket.emit('controlMove', pitch);
    $('#freqMon').val(pitch);
})
socket.on('moveShip', function(allFreqs) {
    //do stuff with the ship. Move, etc.

});
