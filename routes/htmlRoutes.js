//dependencies//
let path = require("path");
let express = require("express");

//routing//
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
    app.get("/more-info", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/more-info.html"));
    });
    app.get("/saved-listing", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/saved-listing.html"));
    });

    app.use("/public", express.static(path.join(__dirname, "../public")));

    app.get("*", function(req, res) {
        res.redirect("/");
    });
};