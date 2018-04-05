var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

app.get("/", function(req,res){
  res.render("home", {page: 'home'})
});

app.get("/about", function(req,res){
  res.render("about", {page: 'about'})
});

app.get("/projects", function(req,res){
  res.render("projects", {page: 'projects'})
});

app.get("/blog", function(req,res){
  res.render("blog", {page: 'blog'})
});


app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Server listening...");
});