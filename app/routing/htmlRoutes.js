// Dependencies
var path = require('path');

module.exports = function(app){
    
    // Home page
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public', 'home.html'))
    });

    // Survey page
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public', 'survey.html'))
    });

    // Friends page
    app.get('/friends', function(req, res){
        res.sendFile(path.join(__dirname, '../public', 'friends.html'))
    });

    // Friends Data
    app.get('/friends/json', function(req, res){
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../public/', 'friend-data.html'))
    });
} 

