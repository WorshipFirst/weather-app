const express  = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname , "../public");
const viewPath = path.join(__dirname ,"../templates/views");
const partials_path = path.join(__dirname ,"../templates/partials");


app.set("view engine","hbs");
app.set("views",viewPath);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("/" , (req,res) => {
    res.render("index")
})
app.get("/about", (req,res) =>{
    res.render("about");
})

app.get("/weather", (req,res) =>{
    res.render("weather");
})

app.get("*", (req,res) =>{
    res.render("404");
})

app.listen(port,()=>{
    console.log("Listning at port no " + port);
})
