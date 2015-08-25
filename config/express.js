var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');
var seo = require('mean-seo');

module.exports = function() {
    var app = express();

    app.use(require('prerender-node').set('prerenderToken', 'iSlhTHOp4QkEbhEee6Cw'));

    app.use(express.static('./public'));
    app.set('port', 3001);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.use(cookieParser());
    app.use(session({
        secret: 'homem avestruz',
        resave: true,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    app.disable('x-powered-by');

    app.use(seo({
        cacheClient: 'disk', // Can be 'disk' or 'redis'
        // redisURL: 'redis://:password@hostname:port', // If using redis, optionally specify server credentials
        cacheDuration: 2 * 60 * 60 * 24 * 1000, // In milliseconds for disk cache
    }));

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    app.get('*', function(req, res){
    	res.render('index');
    });

    return app;
};