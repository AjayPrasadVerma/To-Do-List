const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const path = require('path');
const date = require(__dirname + "/Date.js");

const port = process.env.PORT || 4000;

let items = ["Buy Food", "Coock Food", "Eat Food"];
let workItem = [];

let staticPath = path.join(__dirname, "/Public");

app.use(express.static(staticPath));
app.use(bodyParse.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    // we can alse write or date code here
    let day = date();
    res.render('list', { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        // push in work page
        workItem.push(item);
        res.redirect("/work");
    }
    else {
        // Push in home page
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req, res) => {

    res.render("list", { listTitle: "Work List", newListItems: workItem })
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});