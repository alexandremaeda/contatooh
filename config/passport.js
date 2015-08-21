var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){
	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: '04c11621ce93e39ed2fc',
		clientSecret: 'b8955d6094843bebf5d195ceb673caec0a747466',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done){
		Usuario.findOrCreate(
			{'login': profile.username},
			{'nome': profile.username},
			function(error, usuario){
				if (error){
					console.log(error);
					return done(error);
				}

				return done(null, usuario);
			}
		);
	}));

	passport.serializeUser(function(usuario, done){
		console.log('serializeUser: ' + usuario._id);
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done){
		console.log('deserializeUser: ' + id);
		Usuario.findById(id).exec()
			.then(function(usuario){
				done(null, usuario)
			}
		);
	});
};