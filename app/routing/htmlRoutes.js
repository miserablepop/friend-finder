// Dependencies
var path = require('path');

module.exports = function(app){
    
    // Home page
    app.get('/', function(req,res){
        res.send('Hello World!')
    })
}