const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5400;


var teachers = [
    {name: "Terence Molodi", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
    {name: "Brigette baxton", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"} 
];

//to use body parser
app.use(bodyParser.urlencoded({extended: true}));
//view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/teach", (req, res)=> {
    res.render("teach", {teachers:teachers});
});

app.post("/teach", (req, res) => {
    //get data from from form and add to documents array
    var name = req.body.name;
    var image = req.body.image;
    var newTeacher = {name: name, image: image}
    teachers.push(newTeacher);
    res.redirect("/teach");
    //redirect to teachers page
});

//shows form which sends data to db
app.get("/teach/new", (req, res) => {
        res.render("new.ejs");
})

app.listen(port, () => {
    console.log("Teach english in china app has started!")
});