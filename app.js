const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5400;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/documents", (req, res)=> {
    var documents = [
        {name: "Police clearance", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
        {name: "Police clearance expungement", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
        {name: "Abridged Marriage certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
        {name: "Unabridged Marriage Certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
        {name: "Abridged Birth certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
        {name: "Unabridged Birth Certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"},
        {name: "Unabridged Marriage Certificate", image: "https://image.freepik.com/free-photo/pile-unfinished-documents-office-desk_42667-858.jpg"}
    ]
    res.render("documents", {documents:documents});
});

app.post("/documents", (req, res) => {
    res.send("You hit the post route");
    //get data from from form and add to documents array
    req.body.name
    req.body.image
    //redirect to documents page
});

app.listen(port, () => {
    console.log("Docs2go application has started!")
});