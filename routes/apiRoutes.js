//load data//
// let friendData = require("../data/friends");

//routing//
module.exports = function(app) {
    app.get("/api/jobs", function(req, res) {
        res.json(friendData);
    });
    app.post("/api/jobs", function(req, res) {
        friendData.push(req.body);
        res.json(true);
    });
};