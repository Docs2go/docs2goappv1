const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5400;


var documents = [
    {name: "Police clearance", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
    {name: "Police clearance expungement", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
    {name: "Abridged Marriage certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
    {name: "Unabridged Marriage Certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
    {name: "Abridged Birth certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
    {name: "Unabridged Birth Certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
    {name: "Unabridged Marriage Certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"}
];

//to use body parser
app.use(bodyParser.urlencoded({extended: true}));
//view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/documents", (req, res)=> {
    res.render("documents", {documents:documents});
});

app.post("/documents", (req, res) => {
    //get data from from form and add to documents array
    var name = req.body.name;
    var image = req.body.image;
    var newDocument = {name: name, image: image}
    documents.push(newDocument);
    res.redirect("/documents");
    //redirect to documents page
});

//shows form which sends data to db
app.get("/documents/new", (req, res) => {
        res.render("new.ejs");
})

app.listen(port, () => {
    console.log("Docs2go application has started!")
});