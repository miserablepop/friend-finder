var friends = require('../data/friends');
// var loadCards = require('../public/javascript/app');

module.exports = function(app){

    // Returns Friends array in JSON
    app.get('/friends/data', function(req, res){
        res.json(friends);
    });

    // 
    app.post('/friends', function(req, res){
        
        var newFriend = req.body;
        console.log(newFriend);

        // I want to incorporate some code to loop through the friendsarray to see if the user already exists. 
        // That way we don't have the same user multiple times.

        
        // parseInt for scores
        for(var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }

        // default friend match is the first friend but result will be whoever has the minimum difference in scores
        var bestFriendIndex = 0;
        var minimumDifference = 40;

        // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
        //  whatever the difference is, add to the total difference
        for(var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for(var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
            if(totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }   
        
        friends.push(newFriend);
        res.json(friends[bestFriendIndex]);
    });

};