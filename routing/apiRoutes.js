var path = require('path');
var friendsList = require('../app/data/friends');
module.exports = function(app){
    app.use("/survey", function(req, res){
        var response = req.body;
        friendsList.push(response);

        console.log(friendsList);
        
    })
}