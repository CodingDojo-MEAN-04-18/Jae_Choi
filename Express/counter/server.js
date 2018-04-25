var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: "codingdojorocks"}));

app.get("/", function (request, response) {
    request.session.count = request.body.count
    request.session.count += 1;
    response.render("index", {count: count});
})

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.listen(8000, function() {
    console.log("listening on port 8000")
})