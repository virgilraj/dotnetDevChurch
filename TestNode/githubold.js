﻿//// Get the access token object.
//var token;
////var token = {
////    'expires_in': '7200'
////};

//var oauth2 = require('simple-oauth2')({
//    clientID: '480c9bdcb7c9e93e60bd',
//    clientSecret: '30bb3c7625622d44c4f340a54e12879f5622c90a',
//    site: 'https://github.com/login',
//    tokenPath: '/oauth/access_token'
//});
//function getGitToken() {
    
//    // Create the access token wrapper
//    //token = oauth2.accessToken.create(token);
//    //console.log(JSON.stringify(token));
//    oauth2.password.getToken({
//        username: 'virgilraj@gmail.com',
//        password: 'virgil254617'
//    }, saveToken);

//    // Save the access token
//    function saveToken(error, result) {
//        console.log(result);
//        if (error) { console.log('Access Token Error', error.message); }
//        token = oauth2.accessToken.create(result);

//        oauth2.api('GET', '/users', {
//            access_token: token.token.access_token
//        }, function (err, data) {
//            console.log(data);
//        });
//    };
//}
//exports.getGitToken = getGitToken;


//var express = require('express'),
//    app = express();

//var oauth2 = require('simple-oauth2')({
//    clientID: '480c9bdcb7c9e93e60bd',
//    clientSecret: '30bb3c7625622d44c4f340a54e12879f5622c90a',
//    site: 'https://github.com/login',
//    tokenPath: '/oauth/access_token'
//});

//// Authorization uri definition
//var authorization_uri = oauth2.authCode.authorizeURL({
//    redirect_uri: 'http://localhost:8888/callback',
//    scope: 'user'
//});

//// Initial page redirecting to Github
//app.get('/auth', function (req, res) {
//    console.log(authorization_uri);
//    res.redirect(authorization_uri);
//});

//// Callback service parsing the authorization token and asking for the access token
//app.get('/callback', function (req, res) {
//    var code = req.query.code;
//    console.log('/callback');
//    oauth2.authCode.getToken({
//        code: code,
//        redirect_uri: 'http://localhost:8888/callback'
//    }, saveToken);

//    function saveToken(error, result) {
//        if (error) { console.log('Access Token Error', error.message); }
//        console.log(result);
//        token = oauth2.accessToken.create(result);
//    }
//});

//app.get('/', function (req, res) {
//    res.send('Hello<br><a href="/auth">Log in with Github</a>');
//});

//app.listen(8888);

//console.log('Express server started on port 8888');

var GitHubApi = require("github");



var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

github.authenticate({
    type: "basic",
    username: 'virgilraj',
    password: 'virgil254617'
});

github.user.getFollowingFromUser({
    user: "virgilraj"
}, function (err, res) {
    console.log(JSON.stringify(res));
});

github.authorization.getAll({ id: "virgilraj" }, function(err, res){
    console.log(JSON.stringify(res));
    github.repos.getAll({}, function (err1, res1 ) {
        console.log(JSON.stringify(res1));
    });
    console.log('sdf');
    console.log(JSON.stringify(err));
});