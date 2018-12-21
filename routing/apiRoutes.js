var path = require('path');
var friendsList = require('../app/data/friends');
module.exports = function (app) {
    app.post("/survey", function (req, res) {
        var response = req.body;
        var friendScore = 0;
        var compareFriends = function () {
            for (i = 0; i < friendsList.length; i++) {
                // console.log(friendsList[i]);
                
                for(j=0; j<=10; j++){
                    let answer = `q${j}`;
                if (response.answer == friendsList[i].answer) {
                    console.log(response.answer);
                    console.log(friendsList[i].answer);
                    friendScore++
                };
            };
                console.log(friendScore);
            
        };
        };
        friendsList.push(response);


        

    });
}