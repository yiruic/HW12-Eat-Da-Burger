// For database function
var burger = require("../models/burger.js");

var express = require("express");
var router = express.Router();

// Get list of burgers and display on page
router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject);
    });
});

//Devour a burger
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update({ devoured: req.body.devoured }, condition, function() {
        res.redirect("/");
    });
});

//Add a new burger
router.post("/", function(req, res) {
    burger.insert(["burger_name"], [req.body.burgerName], function() {
        res.redirect("/");
    });
});

module.exports = router;
