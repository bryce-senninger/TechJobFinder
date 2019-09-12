//dependencies//
let express = require("express");

//set up the express app//
let app = express();
let PORT = process.env.PORT || 8080;

//set up express app to handle data parsing//
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//set up route files//
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//set up listener, initialize server//
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
})
