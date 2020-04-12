const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
    res.render("index");
});
app.get('/result', (req, res) => {
    user = req.body
    console.log(user)
    res.render("result")
});
app.post('/submit', (req, res) => {
    console.log(req.body)
    res.render("result", {user: req.body});
});



app.listen(8000, () => console.log("listening on port 8000"));