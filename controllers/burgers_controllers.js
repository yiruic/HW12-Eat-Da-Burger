var express = require('express');
var burger = require('../models/burger.js');

//Create the `router` for the app, and export the `router` at the end of your file.
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
router.post("/create", function(req, res) {
    burger.insert(["burger_name"], [req.body.burgerName], function() {
        res.redirect("/");
    });
});


module.export = router;
