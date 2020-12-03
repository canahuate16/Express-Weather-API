const express = require("express");
const app = express();
const port = 3000;
const router = require ("./router");

app.use (express.static ("public"));
app.use (express.urlencoded ( {extender: false}));
app.use (express.json ());
app.set("views", "views") ;
app.set ("view engine", "hbs");


app.get ("/", router);
app.get ("/about", router);




app.listen(port, () => {
    console.log (`Listening on port ${port} `)
}) 

