const express = require("express");
const app = express();
const ejs = require("ejs");
var port = 80;
app.use(express.static("public"));
app.set("view engine", "ejs");


app.listen(port, function(){
	console.log("Server Started at localhost: " + port);
});

app.get("*", function(req,res){
	res.render("index");
});