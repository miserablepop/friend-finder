// Required dependencies 
const express = require('express');
var path = require('path');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

// Set port to 8080
const PORT = 8080;

// Configure the Express application
const app = express(htmlRoutes);

// Start listening on port 8080
app.listen(PORT, function(){
    console.log('Server is listening on PORT: ' + PORT);
});

