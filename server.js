// Required dependencies 
const express = require('express');
var path = require('path');

// Set port to 8080
const PORT = 8080;

// Configure the Express application
const app = express();

// Public directory to access CSS file
app.use(express.static(path.join(__dirname, './app/public')));

// // Add application routes
// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on port 8080
app.listen(PORT, function(){
    console.log('Server is listening on PORT: ' + PORT);
});

