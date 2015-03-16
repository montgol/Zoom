var express = require('express'),
    logger = require('morgan'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
var routes = require('./routes');
var config = require('./.config');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')

//use stuff
app.use(logger('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/',routes);


var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {

    socket.on('controlMove', function(moveObj) {
        //Do stuff!
        io.emit('moveShip', moveObj); //move the ship 
    });
    socket.on('buzz',function(err){
        io.emit('crash',err)
    })
});


 http.listen(3000, config.ip );



app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500).send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500).send({
        message: err.message,
        error: {}
    });
});

