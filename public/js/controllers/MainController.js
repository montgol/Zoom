var app = angular.module("Ship", []);


app.controller("MainController", function($scope, socket) {

});

//I'm pretty sure the following is all included in SocketFactory. But just in case, for now...
// app.factory('socketFactory', function($rootScope) {
//     var socket = io.connect();
//     return {
//         on: function(eventName, callback) {
//             socket.on(eventName, function() {
//                 var args = arguments;
//                 $rootScope.$apply(function() {
//                     callback.apply(socket, args);
//                 });
//             });
//         },
//         emit: function(eventName, data, callback) {
//             socket.emit(eventName, data, function() {
//                 var args = arguments;
//                 $rootScope.$apply(function() {
//                     if (callback) {
//                         callback.apply(socket, args);
//                     }
//                 });
//             })
//         }
//     };
// });