const express = require("express");
const session = require("express-session");
const app = express();


app.use(session({secret: 'formulario'}));
app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );


app.set('views', __dirname + '/vistas'); 
app.set('view engine', 'ejs');

app.get("/", function (req,res){
    res.render("formulario");
})

//app.get("/result", function(req, res){
   //  res.render("results", {results: req.session.results})
// }) //

app.post("/result", function (req, res){
    console.log(req.body);
    res.render("results", {results : req.body});
})


app.listen(8000, function(){
    console.log("Escuchando el puerto: 8000");
})