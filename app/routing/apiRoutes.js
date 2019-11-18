var friends = require('../data/friends');

module.exports = function(app){

    // Returns Friends array in JSON
    app.get('/friends', function(req, res){
        res.json(friends);
    });

    // app.post('/friends', function(req, res){
        
    // });

};